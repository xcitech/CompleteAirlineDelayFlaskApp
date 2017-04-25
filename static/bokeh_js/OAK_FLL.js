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
      };var element = document.getElementById("4d2860c7-f37e-421e-b4fb-cbeebb8110a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d2860c7-f37e-421e-b4fb-cbeebb8110a0' but no matching script tag was found. ")
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
                  var docs_json = {"4f011127-3431-4b56-a897-1670ea04e530":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.97, 30.033]","(29.97, 30.033]","(29.97, 30.033]","(29.97, 30.033]"],"chart_index":[{"POS_ARR_DELAY":"(29.97, 30.033]"},{"POS_ARR_DELAY":"(29.97, 30.033]"},{"POS_ARR_DELAY":"(29.97, 30.033]"},{"POS_ARR_DELAY":"(29.97, 30.033]"}],"values":[30.0,30.0,30.0,30.0],"x":[10,10,10,10],"y":["Wednesday","Friday","Saturday","Sunday"]}},"id":"925b0451-4b3b-44c6-9434-e68b6b1c94ea","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"db02e6a9-8e03-4577-b7d6-baf482386b29","type":"BasicTickFormatter"},"plot":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"},"ticker":{"id":"a84c3f9e-da8b-4f5a-86b1-f1cd2ca468b9","type":"BasicTicker"}},"id":"e510c3ab-cb03-4d96-8649-6e9fc1c04da4","type":"LinearAxis"},{"attributes":{},"id":"c33395af-f611-47ed-9147-23cef9997e96","type":"ToolEvents"},{"attributes":{"callback":null,"end":23},"id":"400eaa52-80b4-43ca-b25b-20e559a88955","type":"Range1d"},{"attributes":{"plot":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"}},"id":"24da2ad1-9906-4029-8c94-34839ac44e69","type":"WheelZoomTool"},{"attributes":{},"id":"db02e6a9-8e03-4577-b7d6-baf482386b29","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"}},"id":"2f19b191-a8d1-44d1-9c5c-611ffd9f376c","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.97, 30.033]","(29.97, 30.033]","(29.97, 30.033]","(29.97, 30.033]"],"chart_index":[{"POS_ARR_DELAY":"(29.97, 30.033]"},{"POS_ARR_DELAY":"(29.97, 30.033]"},{"POS_ARR_DELAY":"(29.97, 30.033]"},{"POS_ARR_DELAY":"(29.97, 30.033]"}],"values":[30.0,30.0,30.0,30.0],"x":[10,10,10,10],"y":["Wednesday","Friday","Saturday","Sunday"]}},"id":"f33c50d3-d2c7-49dd-a7cb-91e18ad4e807","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Wednesday","Friday","Saturday","Sunday","Monday","Tuesday","Thursday"]},"id":"d7221c4d-63d2-4a18-97fd-b2a406ae2190","type":"FactorRange"},{"attributes":{},"id":"5d10ac99-473c-41f3-87cc-7e5e8b1f58d6","type":"CategoricalTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"5670427d-fc1d-4c74-a347-8736fd6b423a","type":"LinearAxis"}],"left":[{"id":"9502e44a-fa7f-4853-94b1-6ba9aaa737cb","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"0c2c23f6-72d1-4da5-8288-1399b8b930a9","type":"BoxAnnotation"},{"id":"ba90dbd6-4714-40f8-82c7-d57f4d010b25","type":"GlyphRenderer"},{"id":"5670427d-fc1d-4c74-a347-8736fd6b423a","type":"LinearAxis"},{"id":"9502e44a-fa7f-4853-94b1-6ba9aaa737cb","type":"CategoricalAxis"},{"id":"9c76268a-c192-453b-a509-1670462d9d98","type":"ColorBar"}],"right":[{"id":"9c76268a-c192-453b-a509-1670462d9d98","type":"ColorBar"}],"title":{"id":"dc36f3b9-1a31-42cf-8854-b5324137f720","type":"Title"},"tool_events":{"id":"c33395af-f611-47ed-9147-23cef9997e96","type":"ToolEvents"},"toolbar":{"id":"29d61579-b678-4235-8883-dea04c16590f","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"400eaa52-80b4-43ca-b25b-20e559a88955","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"219d3817-5fdf-4254-a79a-6b06e6e98507","type":"FactorRange"}},"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"}},"id":"777d02c0-d2bb-4dad-b492-316cc6147626","type":"SaveTool"},{"attributes":{"plot":null,"text":"JetBlue Airways"},"id":"47ec2a56-2166-4303-a414-fa4a2cdd6e37","type":"Title"},{"attributes":{},"id":"d7b55659-40be-42ec-b5bb-7e96f397b8db","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3388a72b-f619-4878-9d99-52a2867ed9cc","type":"BoxAnnotation"},{"attributes":{},"id":"245ef906-2b4e-4c66-8839-5e226593751a","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e510c3ab-cb03-4d96-8649-6e9fc1c04da4","type":"LinearAxis"}],"left":[{"id":"b51232fb-442c-44ac-ab37-55f2a8ab994a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"3388a72b-f619-4878-9d99-52a2867ed9cc","type":"BoxAnnotation"},{"id":"33bc764b-70a2-4077-a55c-580c8c6a6b47","type":"GlyphRenderer"},{"id":"e510c3ab-cb03-4d96-8649-6e9fc1c04da4","type":"LinearAxis"},{"id":"b51232fb-442c-44ac-ab37-55f2a8ab994a","type":"CategoricalAxis"},{"id":"88f6873e-0579-45a7-b91c-ceba70825b75","type":"ColorBar"}],"right":[{"id":"88f6873e-0579-45a7-b91c-ceba70825b75","type":"ColorBar"}],"title":{"id":"47ec2a56-2166-4303-a414-fa4a2cdd6e37","type":"Title"},"tool_events":{"id":"82a9bb7c-a607-4e47-b15e-9638296bea3d","type":"ToolEvents"},"toolbar":{"id":"fcf5f51e-07d8-42c1-8a0b-72a47089d4b3","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"af06ce7b-d5bd-4bf5-a4ae-c813de92a963","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"d7221c4d-63d2-4a18-97fd-b2a406ae2190","type":"FactorRange"}},"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"4f93206f-7c56-42c2-894f-bec605d5ca15","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"}},"id":"d9ce7f36-a3a0-467c-b421-dcb70f15ca30","type":"PanTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"70e88b48-bdd4-4ad9-b2ed-c4d1933b6ee1","type":"BasicTickFormatter"},"plot":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"},"ticker":{"id":"df7c0e1e-727a-4fec-84e8-9afc37e05ce2","type":"BasicTicker"}},"id":"5670427d-fc1d-4c74-a347-8736fd6b423a","type":"LinearAxis"},{"attributes":{"child":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"a4595d88-4f4e-4c22-861a-a516e996c4d9","type":"Panel"},{"attributes":{"plot":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"}},"id":"6c0f913e-74a5-464a-8e17-6f71d3819838","type":"HelpTool"},{"attributes":{"color_mapper":{"id":"73133926-ec22-4f45-85d4-4559b4a52c01","type":"LinearColorMapper"},"formatter":{"id":"4f93206f-7c56-42c2-894f-bec605d5ca15","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"},"ticker":{"id":"245ef906-2b4e-4c66-8839-5e226593751a","type":"BasicTicker"}},"id":"9c76268a-c192-453b-a509-1670462d9d98","type":"ColorBar"},{"attributes":{},"id":"a84c3f9e-da8b-4f5a-86b1-f1cd2ca468b9","type":"BasicTicker"},{"attributes":{"child":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"},"title":"B6"},"id":"1989b05e-31b0-407b-9692-f4d7ea8a3762","type":"Panel"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d9ce7f36-a3a0-467c-b421-dcb70f15ca30","type":"PanTool"},{"id":"6b0153ea-4491-4b99-b28d-467147575c7c","type":"WheelZoomTool"},{"id":"6ba0bc1f-379f-44a6-948e-e64e7ee8dbf6","type":"BoxZoomTool"},{"id":"5d609aa9-4542-4093-8c63-50685262257a","type":"SaveTool"},{"id":"3f8ddf25-b2e6-4dc3-b56a-f74742c9f922","type":"ResetTool"},{"id":"2f19b191-a8d1-44d1-9c5c-611ffd9f376c","type":"HelpTool"}]},"id":"29d61579-b678-4235-8883-dea04c16590f","type":"Toolbar"},{"attributes":{},"id":"ca0e5fb5-c588-4c34-889c-7d9aba8c85d8","type":"BasicTicker"},{"attributes":{"callback":null,"tabs":[{"id":"a4595d88-4f4e-4c22-861a-a516e996c4d9","type":"Panel"},{"id":"1989b05e-31b0-407b-9692-f4d7ea8a3762","type":"Panel"}]},"id":"b440dde6-0cbc-4e78-aa36-cebda37db459","type":"Tabs"},{"attributes":{},"id":"e3b1b3a5-8f01-43a4-adc6-4a059f6e3780","type":"CategoricalTickFormatter"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"73133926-ec22-4f45-85d4-4559b4a52c01","type":"LinearColorMapper"},{"attributes":{"overlay":{"id":"3388a72b-f619-4878-9d99-52a2867ed9cc","type":"BoxAnnotation"},"plot":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"}},"id":"dc7b5c6d-0a50-4323-b938-0ab7bcea0711","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"925b0451-4b3b-44c6-9434-e68b6b1c94ea","type":"ColumnDataSource"},"glyph":{"id":"84aa0d8d-8adb-40da-8349-ee5c5266ddd2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ba90dbd6-4714-40f8-82c7-d57f4d010b25","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4aeb4fe5-b0fb-4042-a04e-0e5f008cdd71","type":"PanTool"},{"id":"24da2ad1-9906-4029-8c94-34839ac44e69","type":"WheelZoomTool"},{"id":"dc7b5c6d-0a50-4323-b938-0ab7bcea0711","type":"BoxZoomTool"},{"id":"777d02c0-d2bb-4dad-b492-316cc6147626","type":"SaveTool"},{"id":"17be732c-3134-41b5-8e76-d392c8347350","type":"ResetTool"},{"id":"6c0f913e-74a5-464a-8e17-6f71d3819838","type":"HelpTool"}]},"id":"fcf5f51e-07d8-42c1-8a0b-72a47089d4b3","type":"Toolbar"},{"attributes":{"plot":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"}},"id":"4aeb4fe5-b0fb-4042-a04e-0e5f008cdd71","type":"PanTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e3b1b3a5-8f01-43a4-adc6-4a059f6e3780","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"},"ticker":{"id":"3832c7d5-3c55-4630-a887-176bcb8264cc","type":"CategoricalTicker"}},"id":"9502e44a-fa7f-4853-94b1-6ba9aaa737cb","type":"CategoricalAxis"},{"attributes":{},"id":"3832c7d5-3c55-4630-a887-176bcb8264cc","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"}},"id":"6b0153ea-4491-4b99-b28d-467147575c7c","type":"WheelZoomTool"},{"attributes":{},"id":"82a9bb7c-a607-4e47-b15e-9638296bea3d","type":"ToolEvents"},{"attributes":{"overlay":{"id":"0c2c23f6-72d1-4da5-8288-1399b8b930a9","type":"BoxAnnotation"},"plot":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"}},"id":"6ba0bc1f-379f-44a6-948e-e64e7ee8dbf6","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c2c23f6-72d1-4da5-8288-1399b8b930a9","type":"BoxAnnotation"},{"attributes":{"color_mapper":{"id":"5e021b02-5d40-4a4a-8617-0fea93580e6c","type":"LinearColorMapper"},"formatter":{"id":"f66a47a0-127a-48a2-9561-08054ab1fd8d","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"},"ticker":{"id":"ca0e5fb5-c588-4c34-889c-7d9aba8c85d8","type":"BasicTicker"}},"id":"88f6873e-0579-45a7-b91c-ceba70825b75","type":"ColorBar"},{"attributes":{"plot":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"}},"id":"3f8ddf25-b2e6-4dc3-b56a-f74742c9f922","type":"ResetTool"},{"attributes":{"plot":{"id":"e7bf5992-f416-49bf-91b8-afb27d04bdef","subtype":"Chart","type":"Plot"}},"id":"5d609aa9-4542-4093-8c63-50685262257a","type":"SaveTool"},{"attributes":{"data_source":{"id":"f33c50d3-d2c7-49dd-a7cb-91e18ad4e807","type":"ColumnDataSource"},"glyph":{"id":"ebd2bf6c-bb50-4fc0-b3bf-8d63b6759683","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"33bc764b-70a2-4077-a55c-580c8c6a6b47","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"af06ce7b-d5bd-4bf5-a4ae-c813de92a963","type":"Range1d"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"d7b55659-40be-42ec-b5bb-7e96f397b8db","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"},"ticker":{"id":"5d10ac99-473c-41f3-87cc-7e5e8b1f58d6","type":"CategoricalTicker"}},"id":"b51232fb-442c-44ac-ab37-55f2a8ab994a","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"84aa0d8d-8adb-40da-8349-ee5c5266ddd2","type":"Rect"},{"attributes":{},"id":"70e88b48-bdd4-4ad9-b2ed-c4d1933b6ee1","type":"BasicTickFormatter"},{"attributes":{},"id":"df7c0e1e-727a-4fec-84e8-9afc37e05ce2","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Wednesday","Friday","Saturday","Sunday","Monday","Tuesday","Thursday"]},"id":"219d3817-5fdf-4254-a79a-6b06e6e98507","type":"FactorRange"},{"attributes":{"plot":{"id":"b0384dfe-f520-4104-8c22-9331b31eadd8","subtype":"Chart","type":"Plot"}},"id":"17be732c-3134-41b5-8e76-d392c8347350","type":"ResetTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5e021b02-5d40-4a4a-8617-0fea93580e6c","type":"LinearColorMapper"},{"attributes":{},"id":"f66a47a0-127a-48a2-9561-08054ab1fd8d","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"dc36f3b9-1a31-42cf-8854-b5324137f720","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ebd2bf6c-bb50-4fc0-b3bf-8d63b6759683","type":"Rect"}],"root_ids":["b440dde6-0cbc-4e78-aa36-cebda37db459"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"4f011127-3431-4b56-a897-1670ea04e530","elementid":"4d2860c7-f37e-421e-b4fb-cbeebb8110a0","modelid":"b440dde6-0cbc-4e78-aa36-cebda37db459"}];
                  
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