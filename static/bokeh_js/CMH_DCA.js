document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("3b2d9c40-e65b-4f15-8355-adb449c201b5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b2d9c40-e65b-4f15-8355-adb449c201b5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"79e56492-6f11-4b93-b8e0-d1e0abd974e0":{"roots":{"references":[{"attributes":{},"id":"08f48ded-a5e3-4bbb-aa2a-4a6ab47ede78","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.8571428571428572,0.0,0.3333333333333333,0.0,0.0,0.6666666666666666,0.0,1.425531914893617,2.3333333333333335,0.0,0.0,2.4893617021276597,0.0,0.4,0.0,1.2727272727272727,1.0,0.0,0.0,0.5],"x":[8,9,8,9,6,8,9,10,12,8,9,10,16,8,9,6,11,12,8,9],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"add51fe8-1291-4974-8480-459b34eba505","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2398232f-d71c-48c0-903d-fa8041c220c9","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.377777777777778,5.4222222222222225,6.0,3.765957446808511,4.714285714285714,3.4166666666666665,3.3529411764705883,6.333333333333333],"x":[10,10,12,10,7,10,12,14],"y":["Monday","Tuesday","Tuesday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"11316227-56de-4600-b597-05098b50e9f0","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"35931062-6235-43bc-a18a-5cd570031d6a","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0],"x":[14,15],"y":["Monday","Thursday"]}},"id":"bde8609a-0b62-4c90-b81b-cc1754d187ea","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"ad0d7b21-4358-4654-95bf-2cf0c432baa0","type":"LinearAxis"}],"left":[{"id":"5581fe5a-7c3b-4a43-88b3-0dc60c060ae6","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ae68a53c-5641-4275-98d3-543e1e130adb","type":"BoxAnnotation"},{"id":"ebd3f6ed-c554-4ba3-bcdb-bcd3f4bcd71f","type":"GlyphRenderer"},{"id":"2a5bdf45-2054-4c3f-b7e0-080f57084a7e","type":"GlyphRenderer"},{"id":"d74ca775-1124-4455-9c39-bddee9cff660","type":"GlyphRenderer"},{"id":"be6260bd-7592-4ae8-8ac0-2bf10d86d1b7","type":"GlyphRenderer"},{"id":"2fd4479b-7aee-47e5-a19d-9d3eeb3d9ac0","type":"GlyphRenderer"},{"id":"a0e9dfa0-c20e-4063-8c1c-a9d0a3a22b99","type":"GlyphRenderer"},{"id":"79277ed0-e12f-401e-962c-308da8ff20c0","type":"GlyphRenderer"},{"id":"42a545d6-49a6-465e-a60c-68943db32029","type":"GlyphRenderer"},{"id":"ad0d7b21-4358-4654-95bf-2cf0c432baa0","type":"LinearAxis"},{"id":"5581fe5a-7c3b-4a43-88b3-0dc60c060ae6","type":"CategoricalAxis"},{"id":"b5795312-b962-4f13-9ba2-f0340478249b","type":"ColorBar"}],"right":[{"id":"b5795312-b962-4f13-9ba2-f0340478249b","type":"ColorBar"}],"title":{"id":"edd91666-3a39-4cc3-bf6f-86d0285945a8","type":"Title"},"tool_events":{"id":"06c499f3-7ffe-444b-a69f-b4803dac3e8d","type":"ToolEvents"},"toolbar":{"id":"46636cfa-f937-41e3-b7a1-f714658e8cf3","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"f3b5383f-db9a-4066-8967-fbd70b96dac0","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ecc4ed18-c567-4715-adcf-4f5448fd9f9f","type":"FactorRange"}},"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"add51fe8-1291-4974-8480-459b34eba505","type":"ColumnDataSource"},"glyph":{"id":"3c0781b9-2e1b-4667-8e28-05834e4d5491","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"42a545d6-49a6-465e-a60c-68943db32029","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3c0781b9-2e1b-4667-8e28-05834e4d5491","type":"Rect"},{"attributes":{"color_mapper":{"id":"02859636-6b5e-4c6d-aa9a-363f1122e6e1","type":"LinearColorMapper"},"formatter":{"id":"08f48ded-a5e3-4bbb-aa2a-4a6ab47ede78","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"},"ticker":{"id":"9ed33adc-ecdc-4292-83a0-9cba6de1b8e8","type":"BasicTicker"}},"id":"b5795312-b962-4f13-9ba2-f0340478249b","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f90298db-e405-4545-bab9-2dd58c99d857","type":"Rect"},{"attributes":{"child":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"6ec2c4c1-97f3-477b-b799-fd1a86c8dcf5","type":"Panel"},{"attributes":{"plot":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"}},"id":"4386e35e-8aba-4d12-96e5-4ba4315642d2","type":"ResetTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"7ca6e8b7-60dd-445d-b594-d8a3590688bb","type":"BasicTickFormatter"},"plot":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"},"ticker":{"id":"a2f81503-67cb-4ca8-8e2d-2d1dd865110a","type":"BasicTicker"}},"id":"ad0d7b21-4358-4654-95bf-2cf0c432baa0","type":"LinearAxis"},{"attributes":{"plot":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"}},"id":"aba60cdb-29a7-41f4-b935-36832f8cc35f","type":"PanTool"},{"attributes":{},"id":"7ca6e8b7-60dd-445d-b594-d8a3590688bb","type":"BasicTickFormatter"},{"attributes":{},"id":"d8e9f5ad-0d1a-4071-8875-9bbf6a571c76","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"}},"id":"c04c2879-b677-49f5-98b5-2e77fac93301","type":"HelpTool"},{"attributes":{},"id":"a2f81503-67cb-4ca8-8e2d-2d1dd865110a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[16.951219512195124,18.177777777777777,18.35],"x":[15,10,15],"y":["Wednesday","Sunday","Sunday"]}},"id":"3bf95ef6-5292-4c54-b4c2-fec373498ad0","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"44578e47-9f6a-47a1-9287-6b340b1086aa","type":"Rect"},{"attributes":{},"id":"06c499f3-7ffe-444b-a69f-b4803dac3e8d","type":"ToolEvents"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"d8e9f5ad-0d1a-4071-8875-9bbf6a571c76","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"},"ticker":{"id":"ee2c7c72-a566-488e-a710-14e4cede6945","type":"CategoricalTicker"}},"id":"5581fe5a-7c3b-4a43-88b3-0dc60c060ae6","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.941176470588236,9.5],"x":[12,14],"y":["Monday","Wednesday"]}},"id":"ee495cbb-21da-476d-97ad-dd2f85ea4dc0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11316227-56de-4600-b597-05098b50e9f0","type":"ColumnDataSource"},"glyph":{"id":"44578e47-9f6a-47a1-9287-6b340b1086aa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"79277ed0-e12f-401e-962c-308da8ff20c0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bde8609a-0b62-4c90-b81b-cc1754d187ea","type":"ColumnDataSource"},"glyph":{"id":"c87582c7-4528-48d9-ab5d-ebffb5de18f9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ebd3f6ed-c554-4ba3-bcdb-bcd3f4bcd71f","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"ae68a53c-5641-4275-98d3-543e1e130adb","type":"BoxAnnotation"},"plot":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"}},"id":"a76ba128-ea19-4855-8396-2f548a7de86c","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c87582c7-4528-48d9-ab5d-ebffb5de18f9","type":"Rect"},{"attributes":{},"id":"ee2c7c72-a566-488e-a710-14e4cede6945","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3799db40-8905-4b25-aa77-e9bb6815c36a","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"02859636-6b5e-4c6d-aa9a-363f1122e6e1","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.0,12.38888888888889,13.333333333333334,10.8],"x":[14,12,12,14],"y":["Tuesday","Thursday","Friday","Saturday"]}},"id":"c4abf907-aeda-487a-b390-3093eeedba4e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"}},"id":"9829c6b6-99e1-4bb5-9b76-d1c759af096e","type":"WheelZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"6ec2c4c1-97f3-477b-b799-fd1a86c8dcf5","type":"Panel"}]},"id":"9f2c4571-1dee-4cd4-9c12-123c7d386ff8","type":"Tabs"},{"attributes":{"data_source":{"id":"3bf95ef6-5292-4c54-b4c2-fec373498ad0","type":"ColumnDataSource"},"glyph":{"id":"2398232f-d71c-48c0-903d-fa8041c220c9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d74ca775-1124-4455-9c39-bddee9cff660","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"02ce7b57-a264-4efe-a7be-b995481f964b","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"f3b5383f-db9a-4066-8967-fbd70b96dac0","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aba60cdb-29a7-41f4-b935-36832f8cc35f","type":"PanTool"},{"id":"9829c6b6-99e1-4bb5-9b76-d1c759af096e","type":"WheelZoomTool"},{"id":"a76ba128-ea19-4855-8396-2f548a7de86c","type":"BoxZoomTool"},{"id":"21979144-cd2c-4f57-b4c1-55555b959294","type":"SaveTool"},{"id":"4386e35e-8aba-4d12-96e5-4ba4315642d2","type":"ResetTool"},{"id":"c04c2879-b677-49f5-98b5-2e77fac93301","type":"HelpTool"}]},"id":"46636cfa-f937-41e3-b7a1-f714658e8cf3","type":"Toolbar"},{"attributes":{"data_source":{"id":"c4abf907-aeda-487a-b390-3093eeedba4e","type":"ColumnDataSource"},"glyph":{"id":"02ce7b57-a264-4efe-a7be-b995481f964b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2fd4479b-7aee-47e5-a19d-9d3eeb3d9ac0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ee495cbb-21da-476d-97ad-dd2f85ea4dc0","type":"ColumnDataSource"},"glyph":{"id":"f90298db-e405-4545-bab9-2dd58c99d857","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a0e9dfa0-c20e-4063-8c1c-a9d0a3a22b99","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.166666666666668],"x":[15],"y":["Monday"]}},"id":"e0cd1969-b577-4e63-a65e-495f78f03a5c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"63ed1f61-d42a-46eb-afa9-1dbbda1be645","subtype":"Chart","type":"Plot"}},"id":"21979144-cd2c-4f57-b4c1-55555b959294","type":"SaveTool"},{"attributes":{},"id":"9ed33adc-ecdc-4292-83a0-9cba6de1b8e8","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"ecc4ed18-c567-4715-adcf-4f5448fd9f9f","type":"FactorRange"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"edd91666-3a39-4cc3-bf6f-86d0285945a8","type":"Title"},{"attributes":{"data_source":{"id":"e0cd1969-b577-4e63-a65e-495f78f03a5c","type":"ColumnDataSource"},"glyph":{"id":"35931062-6235-43bc-a18a-5cd570031d6a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2a5bdf45-2054-4c3f-b7e0-080f57084a7e","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ae68a53c-5641-4275-98d3-543e1e130adb","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"def0a1e9-39ae-472c-9859-edd054ef27c5","type":"ColumnDataSource"},"glyph":{"id":"3799db40-8905-4b25-aa77-e9bb6815c36a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be6260bd-7592-4ae8-8ac0-2bf10d86d1b7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.452380952380953,16.11904761904762],"x":[15,15],"y":["Tuesday","Friday"]}},"id":"def0a1e9-39ae-472c-9859-edd054ef27c5","type":"ColumnDataSource"}],"root_ids":["9f2c4571-1dee-4cd4-9c12-123c7d386ff8"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"79e56492-6f11-4b93-b8e0-d1e0abd974e0","elementid":"3b2d9c40-e65b-4f15-8355-adb449c201b5","modelid":"9f2c4571-1dee-4cd4-9c12-123c7d386ff8"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});