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
      };var element = document.getElementById("734587ab-0d53-4692-8136-8b15f00748b4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '734587ab-0d53-4692-8136-8b15f00748b4' but no matching script tag was found. ")
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
                  var docs_json = {"0fe242f9-fd46-4d5e-ba21-99c4cb67a10a":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d14d9e0-ed8a-4055-809d-cd8e3c81068c","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"030348e0-f3a0-497f-9407-568a0730a0c6","type":"BasicTickFormatter"},"plot":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"},"ticker":{"id":"3c5e49bd-eea2-4391-ad1a-3cb511aca5ee","type":"BasicTicker"}},"id":"ee8c6af0-4ab6-41a7-8610-106d2a098ddc","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f599a753-223a-4695-a029-bdba818fecfb","type":"Rect"},{"attributes":{"child":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"de654793-94ef-4863-8d50-6c64354e4bae","type":"Panel"},{"attributes":{"data_source":{"id":"36269071-93c8-4b09-a740-941a9dfec330","type":"ColumnDataSource"},"glyph":{"id":"d7a52e93-fa86-4a17-ae76-84596a72bc8c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f2bf92a8-336c-4e4e-b8b1-d371407a82cc","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"7b61f91f-7998-46ea-9243-c99731dc1e6a","type":"LinearColorMapper"},"formatter":{"id":"6b29b27c-df8e-45fd-9306-6e7774b555e7","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"},"ticker":{"id":"74ae2331-00e4-49ff-b458-0c34c866d69a","type":"BasicTicker"}},"id":"e8af862c-ccff-4faf-a71f-39779753f49e","type":"ColorBar"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"b8a14b8f-6913-42bc-bb6e-6324e0a999fc","type":"BasicTickFormatter"},"plot":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"},"ticker":{"id":"a16dcab8-3302-4ab9-8ed8-3afd3a94a403","type":"BasicTicker"}},"id":"a8f983af-268a-4e3a-9a0f-09cf73d8e48d","type":"LinearAxis"},{"attributes":{"plot":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"}},"id":"8d8c8603-6824-4f18-b584-0571d8cafd88","type":"ResetTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c05bb383-b681-457e-9b59-198c9f419da4","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"},"ticker":{"id":"04dc64b7-be20-4301-a06c-c3f0f2822979","type":"CategoricalTicker"}},"id":"344714f3-837c-4257-b972-5e27f6c5822d","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"}},"id":"9e44b3b9-ffdb-4bb8-ac54-99b5652e872a","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"a8f983af-268a-4e3a-9a0f-09cf73d8e48d","type":"LinearAxis"}],"left":[{"id":"344714f3-837c-4257-b972-5e27f6c5822d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"36726950-cd83-4cca-816c-cca53bf6f313","type":"BoxAnnotation"},{"id":"c784b75e-90a6-453f-93b6-d946d00727d4","type":"GlyphRenderer"},{"id":"9249437d-fcf8-47b6-b627-749a347c03ab","type":"GlyphRenderer"},{"id":"a8f983af-268a-4e3a-9a0f-09cf73d8e48d","type":"LinearAxis"},{"id":"344714f3-837c-4257-b972-5e27f6c5822d","type":"CategoricalAxis"},{"id":"05299411-b00d-459f-ad37-0f6f2f32df3e","type":"ColorBar"}],"right":[{"id":"05299411-b00d-459f-ad37-0f6f2f32df3e","type":"ColorBar"}],"title":{"id":"b51febed-9313-4f50-b834-9932b31a884f","type":"Title"},"tool_events":{"id":"87047784-39b4-4ec5-a5d3-5ebd4e52416d","type":"ToolEvents"},"toolbar":{"id":"c036aae8-5a9d-45ea-aa31-e6068a8147d9","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"9775179e-89b8-4d86-a1c7-ed54abe6bc5f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"32a8718e-9295-4f7e-af22-9beccb23d257","type":"FactorRange"}},"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"36726950-cd83-4cca-816c-cca53bf6f313","type":"BoxAnnotation"},{"attributes":{"child":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"1ef5f68d-aa17-4f53-9be2-a98f91f139c3","type":"Panel"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"bb48edda-947e-438e-86bf-58e00854e90d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"},"ticker":{"id":"b5492457-de4b-4a45-98b6-c1fc66c36026","type":"CategoricalTicker"}},"id":"50040895-437d-4c85-835d-3b5b86f0baf6","type":"CategoricalAxis"},{"attributes":{},"id":"bb48edda-947e-438e-86bf-58e00854e90d","type":"CategoricalTickFormatter"},{"attributes":{},"id":"b5492457-de4b-4a45-98b6-c1fc66c36026","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"1bc4bdb3-42f8-44c6-8d8a-9f0b3ff5bb77","type":"BoxAnnotation"},"plot":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"}},"id":"87d5e55c-2bce-48cd-ac6d-5934795f2956","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1bc4bdb3-42f8-44c6-8d8a-9f0b3ff5bb77","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9e44b3b9-ffdb-4bb8-ac54-99b5652e872a","type":"PanTool"},{"id":"1d393bc4-fde4-436c-9c55-e1ae9fdc1a0f","type":"WheelZoomTool"},{"id":"9bc7c81b-f6da-4b94-a573-718b5844374e","type":"BoxZoomTool"},{"id":"31959b3e-802c-40ce-a625-28bbf1cde1c9","type":"SaveTool"},{"id":"cb9dc91e-8bba-4ca4-b4e9-83bc5655301d","type":"ResetTool"},{"id":"eed156d2-e77d-4211-a337-e86a65c8ac07","type":"HelpTool"}]},"id":"c036aae8-5a9d-45ea-aa31-e6068a8147d9","type":"Toolbar"},{"attributes":{},"id":"04dc64b7-be20-4301-a06c-c3f0f2822979","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"}},"id":"fdfd96f0-93bc-4362-bf48-c55058f75880","type":"HelpTool"},{"attributes":{},"id":"28b9e431-96c0-4e05-a096-1cb2852e9f0c","type":"BasicTicker"},{"attributes":{"callback":null,"end":23},"id":"9775179e-89b8-4d86-a1c7-ed54abe6bc5f","type":"Range1d"},{"attributes":{},"id":"74ae2331-00e4-49ff-b458-0c34c866d69a","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"21082892-b6eb-4a24-83c6-8c879a6fc7c0","type":"Rect"},{"attributes":{"plot":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"}},"id":"d8dbc916-a821-4fe9-ae4e-2569b73fb25c","type":"PanTool"},{"attributes":{},"id":"6b29b27c-df8e-45fd-9306-6e7774b555e7","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"932a754b-7b94-4e4c-a8f7-908405e6f84d","type":"Title"},{"attributes":{"data_source":{"id":"08856673-bfd2-4c6d-840d-2267c05fd0de","type":"ColumnDataSource"},"glyph":{"id":"5d14d9e0-ed8a-4055-809d-cd8e3c81068c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9249437d-fcf8-47b6-b627-749a347c03ab","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"}},"id":"1d393bc4-fde4-436c-9c55-e1ae9fdc1a0f","type":"WheelZoomTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"ee8c6af0-4ab6-41a7-8610-106d2a098ddc","type":"LinearAxis"}],"left":[{"id":"50040895-437d-4c85-835d-3b5b86f0baf6","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"1bc4bdb3-42f8-44c6-8d8a-9f0b3ff5bb77","type":"BoxAnnotation"},{"id":"9333e971-c244-4b21-97ec-98206bfec9dc","type":"GlyphRenderer"},{"id":"f2bf92a8-336c-4e4e-b8b1-d371407a82cc","type":"GlyphRenderer"},{"id":"ee8c6af0-4ab6-41a7-8610-106d2a098ddc","type":"LinearAxis"},{"id":"50040895-437d-4c85-835d-3b5b86f0baf6","type":"CategoricalAxis"},{"id":"e8af862c-ccff-4faf-a71f-39779753f49e","type":"ColorBar"}],"right":[{"id":"e8af862c-ccff-4faf-a71f-39779753f49e","type":"ColorBar"}],"title":{"id":"932a754b-7b94-4e4c-a8f7-908405e6f84d","type":"Title"},"tool_events":{"id":"f482be15-4844-4497-a61b-a685d95cbced","type":"ToolEvents"},"toolbar":{"id":"f27d7560-02e8-44ea-83a3-c8b3a6a3e177","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c19ee665-bac3-4c2b-8678-33211468aa37","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5d266fe5-d038-441d-9d47-d70960868f09","type":"FactorRange"}},"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5d266fe5-d038-441d-9d47-d70960868f09","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.1, 23.8]"],"chart_index":[{"POS_ARR_DELAY":"(21.1, 23.8]"}],"values":[23.75],"x":[13],"y":["Monday"]}},"id":"ef57ce75-c6db-4b3f-897d-d66ee795c143","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.02, 2.6]","[-0.02, 2.6]","[-0.02, 2.6]","[-0.02, 2.6]","[-0.02, 2.6]","[-0.02, 2.6]"],"chart_index":[{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"}],"values":[0.0,0.75,0.0,0.0,2.0,0.0],"x":[13,13,13,13,15,13],"y":["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},"id":"36269071-93c8-4b09-a740-941a9dfec330","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"32a8718e-9295-4f7e-af22-9beccb23d257","type":"FactorRange"},{"attributes":{"data_source":{"id":"5f74c97e-c7b4-44f5-af65-b1f72028d46e","type":"ColumnDataSource"},"glyph":{"id":"f599a753-223a-4695-a029-bdba818fecfb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c784b75e-90a6-453f-93b6-d946d00727d4","type":"GlyphRenderer"},{"attributes":{},"id":"a16dcab8-3302-4ab9-8ed8-3afd3a94a403","type":"BasicTicker"},{"attributes":{"plot":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"}},"id":"eed156d2-e77d-4211-a337-e86a65c8ac07","type":"HelpTool"},{"attributes":{"data_source":{"id":"ef57ce75-c6db-4b3f-897d-d66ee795c143","type":"ColumnDataSource"},"glyph":{"id":"21082892-b6eb-4a24-83c6-8c879a6fc7c0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9333e971-c244-4b21-97ec-98206bfec9dc","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"}},"id":"a0252855-f057-4fd7-80b0-41cc171cd081","type":"SaveTool"},{"attributes":{"callback":null,"end":23},"id":"c19ee665-bac3-4c2b-8678-33211468aa37","type":"Range1d"},{"attributes":{},"id":"b8a14b8f-6913-42bc-bb6e-6324e0a999fc","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.02, 2.6]","[-0.02, 2.6]","[-0.02, 2.6]","[-0.02, 2.6]","[-0.02, 2.6]","[-0.02, 2.6]"],"chart_index":[{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"},{"POS_ARR_DELAY":"[-0.02, 2.6]"}],"values":[0.0,0.75,0.0,0.0,2.0,0.0],"x":[13,13,13,13,15,13],"y":["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},"id":"08856673-bfd2-4c6d-840d-2267c05fd0de","type":"ColumnDataSource"},{"attributes":{},"id":"87047784-39b4-4ec5-a5d3-5ebd4e52416d","type":"ToolEvents"},{"attributes":{"plot":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"}},"id":"cb9dc91e-8bba-4ca4-b4e9-83bc5655301d","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d8dbc916-a821-4fe9-ae4e-2569b73fb25c","type":"PanTool"},{"id":"8bb73a0f-a459-4529-a270-24c9262c4cfd","type":"WheelZoomTool"},{"id":"87d5e55c-2bce-48cd-ac6d-5934795f2956","type":"BoxZoomTool"},{"id":"a0252855-f057-4fd7-80b0-41cc171cd081","type":"SaveTool"},{"id":"8d8c8603-6824-4f18-b584-0571d8cafd88","type":"ResetTool"},{"id":"fdfd96f0-93bc-4362-bf48-c55058f75880","type":"HelpTool"}]},"id":"f27d7560-02e8-44ea-83a3-c8b3a6a3e177","type":"Toolbar"},{"attributes":{},"id":"030348e0-f3a0-497f-9407-568a0730a0c6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"32dc8e1c-fb38-465a-8786-9abd72fb3fc2","subtype":"Chart","type":"Plot"}},"id":"8bb73a0f-a459-4529-a270-24c9262c4cfd","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.1, 23.8]"],"chart_index":[{"POS_ARR_DELAY":"(21.1, 23.8]"}],"values":[23.75],"x":[13],"y":["Monday"]}},"id":"5f74c97e-c7b4-44f5-af65-b1f72028d46e","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"2df66b76-e9d1-4bad-ad7e-2342228a8444","type":"LinearColorMapper"},"formatter":{"id":"ffcb8a52-27e1-420b-acaa-3616cfa6d389","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"},"ticker":{"id":"28b9e431-96c0-4e05-a096-1cb2852e9f0c","type":"BasicTicker"}},"id":"05299411-b00d-459f-ad37-0f6f2f32df3e","type":"ColorBar"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"b51febed-9313-4f50-b834-9932b31a884f","type":"Title"},{"attributes":{},"id":"3c5e49bd-eea2-4391-ad1a-3cb511aca5ee","type":"BasicTicker"},{"attributes":{},"id":"f482be15-4844-4497-a61b-a685d95cbced","type":"ToolEvents"},{"attributes":{"callback":null,"tabs":[{"id":"de654793-94ef-4863-8d50-6c64354e4bae","type":"Panel"},{"id":"1ef5f68d-aa17-4f53-9be2-a98f91f139c3","type":"Panel"}]},"id":"91f34cf8-4ae1-4852-94bc-abee4b840f59","type":"Tabs"},{"attributes":{"overlay":{"id":"36726950-cd83-4cca-816c-cca53bf6f313","type":"BoxAnnotation"},"plot":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"}},"id":"9bc7c81b-f6da-4b94-a573-718b5844374e","type":"BoxZoomTool"},{"attributes":{},"id":"ffcb8a52-27e1-420b-acaa-3616cfa6d389","type":"BasicTickFormatter"},{"attributes":{},"id":"c05bb383-b681-457e-9b59-198c9f419da4","type":"CategoricalTickFormatter"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"7b61f91f-7998-46ea-9243-c99731dc1e6a","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7a52e93-fa86-4a17-ae76-84596a72bc8c","type":"Rect"},{"attributes":{"plot":{"id":"ac5c9903-b035-4c41-bef9-fedc966b6280","subtype":"Chart","type":"Plot"}},"id":"31959b3e-802c-40ce-a625-28bbf1cde1c9","type":"SaveTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"2df66b76-e9d1-4bad-ad7e-2342228a8444","type":"LinearColorMapper"}],"root_ids":["91f34cf8-4ae1-4852-94bc-abee4b840f59"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"0fe242f9-fd46-4d5e-ba21-99c4cb67a10a","elementid":"734587ab-0d53-4692-8136-8b15f00748b4","modelid":"91f34cf8-4ae1-4852-94bc-abee4b840f59"}];
                  
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