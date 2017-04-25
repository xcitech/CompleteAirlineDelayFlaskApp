from flask import Flask, request
from flask import render_template
import pandas as pd
import numpy as np
from sklearn.externals import joblib
from datetime import datetime
app = Flask(__name__)

@app.route('/plot1')
def plot1():
	return render_template('plot1.html')

@app.route('/plot2')
def plot2():
	return render_template('plot2.html')

@app.route('/plot3')
def plot3():
	return render_template('plot3.html')


@app.route('/')
def home():
	return render_template('home.html')
	
@app.route('/getscore',methods=['POST','GET'])
def get_score():
    if request.method=='POST':
        result=request.form
        #Get the filenames for the score file and the map files
        filename=result['origin']+'_'+result['dest']+'.csv'
        map_filename = 'static/map_files/'+result['origin']+'_'+result['dest']+'.png'
		
        df = pd.read_csv('data/'+filename)
        data = {'origin': result['origin'], 'dest':result['dest'],
				'origin_city': df.loc[0,'TEXT_DATA'],'origin_name': df.loc[1,'TEXT_DATA'],
				'dest_city': df.loc[2,'TEXT_DATA'],'dest_name': df.loc[3,'TEXT_DATA'],
				'dist': df.loc[4,'TEXT_DATA'],
				'tag': df.loc[5,'TEXT_DATA'],
				'dep_delay': df.loc[6,'ARR_DELAY'],
				'avg_flights': df.loc[7,'ARR_DELAY'],
		        'percent_delayed': df.loc[8,'ARR_DELAY'],
                'arr_delay': df.loc[9,'ARR_DELAY'],
                'carrier_1': df.loc[10,'Description'],'carrier_1_perc': df.loc[10,'count'],'carrier_1_delay_15': df.loc[10,'DELAY_15'],
                'carrier_2': df.loc[11,'Description'],'carrier_2_perc': df.loc[11,'count'],'carrier_2_delay_15': df.loc[11,'DELAY_15'],
                'carrier_3': df.loc[12,'Description'],'carrier_3_perc': df.loc[12,'count'],'carrier_3_delay_15': df.loc[12,'DELAY_15'],                
                'carrier_4': df.loc[13,'Description'],'carrier_4_perc': df.loc[13,'count'],'carrier_4_delay_15': df.loc[13,'DELAY_15'],
                'carrier_5': df.loc[14,'Description'],'carrier_5_perc': df.loc[14,'count'],'carrier_5_delay_15': df.loc[14,'DELAY_15']
                }
                
        #Check if user wants a delay prediction
        try:
            if result['check_delay']=='on':
                predict_delay=1
        except:
            predict_delay=0
            prob=0
            delay=0
        
        #If user wants delay prediction:
        if predict_delay==1:            
            try:
                dt = result['dt']
                dt = datetime.strptime(dt, "%Y-%m-%d")
                month = dt.month
                day_of_week = dt.weekday()
                unique_carrier = result['unique_carrier']
                origin = result['origin']
                dest = result['dest']
                dep_hour = int(result['dep_hour'])
                arr_hour = int(result['arr_hour'])
                dist = df.loc[4,'TEXT_DATA']

                #Create numerical data
                df_weather = pd.read_csv('weather_airports.csv')
                DEP_HOURLYVISIBILITY = df_weather[(df_weather['IATA']==origin)&(df_weather['MONTH']==month)&(df_weather['HOUR']==dep_hour)]['HOURLYVISIBILITY'].values[0]
                DEP_HOURLYDRYBULBTEMPC = df_weather[(df_weather['IATA']==origin)&(df_weather['MONTH']==month)&(df_weather['HOUR']==dep_hour)]['HOURLYDRYBULBTEMPC'].values[0]
                DEP_HOURLYWindSpeed = df_weather[(df_weather['IATA']==origin)&(df_weather['MONTH']==month)&(df_weather['HOUR']==dep_hour)]['HOURLYWindSpeed'].values[0]
                DEP_HOURLYPrecip = df_weather[(df_weather['IATA']==origin)&(df_weather['MONTH']==month)&(df_weather['HOUR']==dep_hour)]['HOURLYPrecip'].values[0]
        
                ARR_HOURLYVISIBILITY = df_weather[(df_weather['IATA']==origin)&(df_weather['MONTH']==month)&(df_weather['HOUR']==arr_hour)]['HOURLYVISIBILITY'].values[0]
                ARR_HOURLYDRYBULBTEMPC = df_weather[(df_weather['IATA']==origin)&(df_weather['MONTH']==month)&(df_weather['HOUR']==arr_hour)]['HOURLYDRYBULBTEMPC'].values[0]
                ARR_HOURLYWindSpeed = df_weather[(df_weather['IATA']==origin)&(df_weather['MONTH']==month)&(df_weather['HOUR']==arr_hour)]['HOURLYWindSpeed'].values[0]
                ARR_HOURLYPrecip = df_weather[(df_weather['IATA']==origin)&(df_weather['MONTH']==month)&(df_weather['HOUR']==arr_hour)]['HOURLYPrecip'].values[0]
        
                df_numerical = pd.DataFrame([[dist,DEP_HOURLYVISIBILITY,DEP_HOURLYDRYBULBTEMPC,DEP_HOURLYWindSpeed,DEP_HOURLYPrecip,ARR_HOURLYVISIBILITY,ARR_HOURLYDRYBULBTEMPC,ARR_HOURLYWindSpeed,ARR_HOURLYPrecip]])
        
                scaler = joblib.load('model/scale_model.pkl') 
                df_numerical = pd.DataFrame(scaler.transform(df_numerical))
        		
        		#Prepare Categorical data
                cat = pd.read_csv('cat')
                index_dict = dict(zip(cat.columns,range(cat.shape[1])))
        		
                cat_vector = np.zeros(len(cat.columns))
        
                try:
                    cat_vector[index_dict['MONTH_'+str(month)]] = 1
                except:
                    pass
                try:
                    cat_vector[index_dict['DAY_OF_WEEK_'+str(day_of_week)]] = 1
                except:
                    pass
                try:
                    cat_vector[index_dict['UNIQUE_CARRIER_'+str(unique_carrier)]] = 1
                except:
                    pass
                try:
                    cat_vector[index_dict['ORIGIN_'+str(origin)]] = 1
                except:
                    pass
                try:
                    cat_vector[index_dict['DEST_'+str(dest)]] = 1
                except:
                    pass
                try:
                    cat_vector[index_dict['DEP_HOUR_'+str(dep_hour)]] = 1
                except:
                    pass
                try:
                    cat_vector[index_dict['ARR_HOUR_'+str(arr_hour)]] = 1
                except:
                    pass
                
                df_train = pd.concat([df_numerical,pd.DataFrame([cat_vector])],axis=1)
                lm = joblib.load('model/linearmodel.pkl')
                predictions = lm.predict(df_train)
                df_train['PREDICTED_ARR_DELAY']=[np.exp(p) for p in predictions]
                
                
                n = 10 #Number of models to average over
                df_train['DELAY_YN'] = np.zeros(len(df_train.index))
        
                for i in range(n):
                    logmodel = joblib.load('model/'+str(i)+'_logmodel.pkl')
                    df_train['DELAY_YN'] = df_train['DELAY_YN'] + logmodel.predict_proba(df_train.drop(['DELAY_YN','PREDICTED_ARR_DELAY'],axis=1))[:,1]
                
                df_train['DELAY_YN'] = df_train['DELAY_YN'].apply(lambda x:(x/n)*100,2)  
                df_train['PREDICTED_DELAY_YN'] = df_train['DELAY_YN'].apply(lambda x:1 if x>=50 else 0) #Take 0.5 as threshold
                #df_train['PREDICTED_ARR_DELAY'] = df_train['PREDICTED_ARR_DELAY'].multiply(df_train['PREDICTED_DELAY_YN'])
                #df_train['PREDICTED_ARR_DELAY'] = df_train['PREDICTED_ARR_DELAY'].apply(lambda x:x if x>=5 else 0)
               
                prob = (int(df_train['DELAY_YN'].values[0]*100))/100
                delay = df_train['PREDICTED_ARR_DELAY'].values[0]
                predict_delay = 1
                
            except:
                predict_delay=0
                prob=0
                delay=0
        
        plotdata=df.tail(5).copy()
        plotdata.fillna(0,inplace=True)
        plotdata.sort_values('ARR_DELAY',ascending=False,inplace=True)
        chartID = 'chart_ID'
        chart = {"renderTo": chartID, "type": 'bar', "width": 600, "height": 300, "backgroundColor": '#f1f1f1',}

        d1 = {'y':plotdata['ARR_DELAY'].tolist()[0],'color':'#B81300'}
        d2 = {'y':plotdata['ARR_DELAY'].tolist()[1],'color':'#C93A0B'}
        d3 = {'y':plotdata['ARR_DELAY'].tolist()[2],'color':'#DB6217'}
        d4 = {'y':plotdata['ARR_DELAY'].tolist()[3],'color':'#ED8A22'}
        d5 = {'y':plotdata['ARR_DELAY'].tolist()[4],'color':'#FFB22E'}
        d = [d1,d2,d3,d4,d5]

        series = [{"showInLegend": "false",  "name": 'Average Delay (Minutes)', "data": d}]
        title = {"text": ''}
        xAxis = {"categories": plotdata['Description'].tolist()}
        yAxis = {"title": {"text": 'Arrival Delay (Minutes)'}}
	
        
        return render_template('score.html',data=data,map_filename=map_filename,prob=prob,delay=delay,chartID=chartID, chart=chart, series=series, title=title, xAxis=xAxis, yAxis=yAxis,predict_delay=predict_delay)
		
    
    
if __name__ == '__main__':
	app.debug = True
	app.run()