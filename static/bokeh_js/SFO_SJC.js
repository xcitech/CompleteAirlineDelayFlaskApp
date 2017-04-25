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
      };var element = document.getElementById("02819827-2800-4005-a52b-78bed54c0f62");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '02819827-2800-4005-a52b-78bed54c0f62' but no matching script tag was found. ")
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
                  var docs_json = {"ae23d2fd-9126-4bfb-aaa3-747a5a92af6d":{"roots":{"references":[{"attributes":{"plot":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"}},"id":"ece1fcbd-7b46-4ed2-8ea9-6fef6ef435b7","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"}},"id":"fd4c9b80-ecc1-4f42-b1af-7ee0a2c48ee9","type":"ResetTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"a88b60e2-9a94-4454-90f9-a4c91f1aa1e2","type":"LinearAxis"}],"left":[{"id":"5cdab5e1-42b5-43d2-947f-4462a8cdc88e","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"3cfe3369-216a-47fb-9964-f54ac2dbd8b5","type":"BoxAnnotation"},{"id":"dcb4da22-35c2-43fc-b420-7caac5a9ef21","type":"GlyphRenderer"},{"id":"a88b60e2-9a94-4454-90f9-a4c91f1aa1e2","type":"LinearAxis"},{"id":"5cdab5e1-42b5-43d2-947f-4462a8cdc88e","type":"CategoricalAxis"},{"id":"eb9b7e25-0e1f-42a8-ab40-858643bfcdb2","type":"ColorBar"}],"right":[{"id":"eb9b7e25-0e1f-42a8-ab40-858643bfcdb2","type":"ColorBar"}],"title":{"id":"1b20d3be-c1fb-4b2f-b85e-de32b469ff76","type":"Title"},"tool_events":{"id":"f99b5e84-15c1-4802-9fa7-a6a8ca21d9f9","type":"ToolEvents"},"toolbar":{"id":"e043bcc9-3e29-4f8b-96b3-3e90ad1ac6d7","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"644f5c2f-de80-4441-a403-028853bd5838","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ac198f85-1b16-48f8-8501-c2fb64a785fa","type":"FactorRange"}},"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.998, 17.00189]"],"chart_index":[{"POS_ARR_DELAY":"(16.998, 17.00189]"}],"values":[17.0],"x":[16],"y":["Wednesday"]}},"id":"98689843-08a6-4593-8be5-150902e92aec","type":"ColumnDataSource"},{"attributes":{"child":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"},"title":"OO"},"id":"b2012b7f-e124-49ff-ab34-c153af61e48e","type":"Panel"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"eb89896d-f3a9-4ec3-9bed-760c7913a5a1","type":"BasicTickFormatter"},"plot":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"},"ticker":{"id":"f033cff3-5d06-4537-a492-3eb823cd9bf5","type":"BasicTicker"}},"id":"a88b60e2-9a94-4454-90f9-a4c91f1aa1e2","type":"LinearAxis"},{"attributes":{},"id":"b1e48bd9-9bf2-42be-b742-e47249b2e8d0","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24cfe7c8-d9f8-49c6-98b1-2441e8699201","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"SkyWest Airlines "},"id":"aa15b8fe-826c-48ce-af76-735de22b6d41","type":"Title"},{"attributes":{"data_source":{"id":"dd12a8f9-112c-412f-8260-d49277ca36a0","type":"ColumnDataSource"},"glyph":{"id":"a939f8e3-ef3b-46fc-a1d2-85c2be3f1da8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"43059820-84e8-492e-abb2-eed66414a116","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"ffff3ce6-4922-40df-ba68-5610fdebb90a","type":"Panel"},{"id":"b2012b7f-e124-49ff-ab34-c153af61e48e","type":"Panel"}]},"id":"ee5b775b-830b-4937-898e-2e952dbef3a5","type":"Tabs"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3cfe3369-216a-47fb-9964-f54ac2dbd8b5","type":"BoxAnnotation"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"8909fa4e-47d8-4d2f-a603-e572b9ec6f7e","type":"LinearColorMapper"},{"attributes":{},"id":"91ea7462-10fe-4b2e-a55c-61f94426870f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Wednesday","Monday","Tuesday","Thursday","Friday","Saturday","Sunday"]},"id":"ac198f85-1b16-48f8-8501-c2fb64a785fa","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3cf6f8be-177b-42ab-ae67-b39770dc592c","type":"PanTool"},{"id":"ece1fcbd-7b46-4ed2-8ea9-6fef6ef435b7","type":"WheelZoomTool"},{"id":"f3c97df3-aceb-4d19-b7d3-841a83a6bd51","type":"BoxZoomTool"},{"id":"a5b75095-b312-4e83-b116-47e6aef2bd1e","type":"SaveTool"},{"id":"fd4c9b80-ecc1-4f42-b1af-7ee0a2c48ee9","type":"ResetTool"},{"id":"68baebd4-2030-4c46-8e6f-9d71d0c74525","type":"HelpTool"}]},"id":"e043bcc9-3e29-4f8b-96b3-3e90ad1ac6d7","type":"Toolbar"},{"attributes":{},"id":"f033cff3-5d06-4537-a492-3eb823cd9bf5","type":"BasicTicker"},{"attributes":{},"id":"2c8efb86-5c74-4c09-85aa-02760a6772d0","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e2f880ce-db21-4993-8c44-97d240021167","type":"LinearAxis"}],"left":[{"id":"f8459125-831e-449f-bacf-fdb13a8912ca","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"24cfe7c8-d9f8-49c6-98b1-2441e8699201","type":"BoxAnnotation"},{"id":"43059820-84e8-492e-abb2-eed66414a116","type":"GlyphRenderer"},{"id":"e2f880ce-db21-4993-8c44-97d240021167","type":"LinearAxis"},{"id":"f8459125-831e-449f-bacf-fdb13a8912ca","type":"CategoricalAxis"},{"id":"2df98948-78df-4168-b3eb-1f1d8ac96d16","type":"ColorBar"}],"right":[{"id":"2df98948-78df-4168-b3eb-1f1d8ac96d16","type":"ColorBar"}],"title":{"id":"aa15b8fe-826c-48ce-af76-735de22b6d41","type":"Title"},"tool_events":{"id":"949c0a1c-846c-461a-9999-0902f0c69c24","type":"ToolEvents"},"toolbar":{"id":"69316a80-ff6d-4695-b51a-e39043f441db","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"4ba10db4-cccb-4e0c-9fc8-0d6f220417b9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"4864db05-fc14-401c-a006-d34c3e69d459","type":"FactorRange"}},"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"f99b5e84-15c1-4802-9fa7-a6a8ca21d9f9","type":"ToolEvents"},{"attributes":{},"id":"eb89896d-f3a9-4ec3-9bed-760c7913a5a1","type":"BasicTickFormatter"},{"attributes":{},"id":"b1d46dac-ff58-4325-9850-fa9fd3817e0b","type":"CategoricalTicker"},{"attributes":{"callback":null,"end":23},"id":"4ba10db4-cccb-4e0c-9fc8-0d6f220417b9","type":"Range1d"},{"attributes":{},"id":"949c0a1c-846c-461a-9999-0902f0c69c24","type":"ToolEvents"},{"attributes":{},"id":"619e227a-1c33-47c8-b0e9-dc31cc3441cf","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"}},"id":"3cf6f8be-177b-42ab-ae67-b39770dc592c","type":"PanTool"},{"attributes":{"plot":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"}},"id":"68baebd4-2030-4c46-8e6f-9d71d0c74525","type":"HelpTool"},{"attributes":{"plot":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"}},"id":"a5b75095-b312-4e83-b116-47e6aef2bd1e","type":"SaveTool"},{"attributes":{"plot":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"}},"id":"d64378f3-9ba2-4d63-ad1f-c685947852e6","type":"WheelZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"f3ea2f5a-2932-4775-ac3b-7f1cb3bec0aa","type":"BasicTickFormatter"},"plot":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"},"ticker":{"id":"2c8efb86-5c74-4c09-85aa-02760a6772d0","type":"BasicTicker"}},"id":"e2f880ce-db21-4993-8c44-97d240021167","type":"LinearAxis"},{"attributes":{},"id":"629587ce-8231-474b-a66a-482e615bd885","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a939f8e3-ef3b-46fc-a1d2-85c2be3f1da8","type":"Rect"},{"attributes":{"data_source":{"id":"98689843-08a6-4593-8be5-150902e92aec","type":"ColumnDataSource"},"glyph":{"id":"2adc3335-798d-4128-9c2f-4ae5b1b12a41","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dcb4da22-35c2-43fc-b420-7caac5a9ef21","type":"GlyphRenderer"},{"attributes":{},"id":"195f0047-4acd-44d5-97ee-c9eb5e326051","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Wednesday","Monday","Tuesday","Thursday","Friday","Saturday","Sunday"]},"id":"4864db05-fc14-401c-a006-d34c3e69d459","type":"FactorRange"},{"attributes":{},"id":"77424abf-a659-429d-bbb4-942f5c8ce7fc","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.998, 17.00189]"],"chart_index":[{"POS_ARR_DELAY":"(16.998, 17.00189]"}],"values":[17.0],"x":[16],"y":["Wednesday"]}},"id":"dd12a8f9-112c-412f-8260-d49277ca36a0","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"72287089-4dcf-4c76-b6d8-d03ce1c8fdfb","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"}},"id":"28363be7-467a-465d-aa47-56f88c79b37c","type":"HelpTool"},{"attributes":{"plot":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"}},"id":"f55e9085-745d-4ee1-8a8b-b8da499054a1","type":"PanTool"},{"attributes":{"plot":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"}},"id":"d10ed8d9-bb6c-4420-86d2-fba8ad55111c","type":"SaveTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"1b20d3be-c1fb-4b2f-b85e-de32b469ff76","type":"Title"},{"attributes":{"overlay":{"id":"3cfe3369-216a-47fb-9964-f54ac2dbd8b5","type":"BoxAnnotation"},"plot":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"}},"id":"f3c97df3-aceb-4d19-b7d3-841a83a6bd51","type":"BoxZoomTool"},{"attributes":{},"id":"7fddb342-828f-442f-8c6b-b0ab70ebf973","type":"CategoricalTickFormatter"},{"attributes":{"child":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"ffff3ce6-4922-40df-ba68-5610fdebb90a","type":"Panel"},{"attributes":{},"id":"f3ea2f5a-2932-4775-ac3b-7f1cb3bec0aa","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"24cfe7c8-d9f8-49c6-98b1-2441e8699201","type":"BoxAnnotation"},"plot":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"}},"id":"6092f26d-13b8-45ec-a17d-d1601bf63d70","type":"BoxZoomTool"},{"attributes":{"color_mapper":{"id":"8909fa4e-47d8-4d2f-a603-e572b9ec6f7e","type":"LinearColorMapper"},"formatter":{"id":"195f0047-4acd-44d5-97ee-c9eb5e326051","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"},"ticker":{"id":"629587ce-8231-474b-a66a-482e615bd885","type":"BasicTicker"}},"id":"eb9b7e25-0e1f-42a8-ab40-858643bfcdb2","type":"ColorBar"},{"attributes":{"plot":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"}},"id":"03256911-99cf-44cf-9207-93820a0f94fd","type":"ResetTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"619e227a-1c33-47c8-b0e9-dc31cc3441cf","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"18aa2677-c41a-450a-8345-aa5c7d105346","subtype":"Chart","type":"Plot"},"ticker":{"id":"b1d46dac-ff58-4325-9850-fa9fd3817e0b","type":"CategoricalTicker"}},"id":"5cdab5e1-42b5-43d2-947f-4462a8cdc88e","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f55e9085-745d-4ee1-8a8b-b8da499054a1","type":"PanTool"},{"id":"d64378f3-9ba2-4d63-ad1f-c685947852e6","type":"WheelZoomTool"},{"id":"6092f26d-13b8-45ec-a17d-d1601bf63d70","type":"BoxZoomTool"},{"id":"d10ed8d9-bb6c-4420-86d2-fba8ad55111c","type":"SaveTool"},{"id":"03256911-99cf-44cf-9207-93820a0f94fd","type":"ResetTool"},{"id":"28363be7-467a-465d-aa47-56f88c79b37c","type":"HelpTool"}]},"id":"69316a80-ff6d-4695-b51a-e39043f441db","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"644f5c2f-de80-4441-a403-028853bd5838","type":"Range1d"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"7fddb342-828f-442f-8c6b-b0ab70ebf973","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"},"ticker":{"id":"b1e48bd9-9bf2-42be-b742-e47249b2e8d0","type":"CategoricalTicker"}},"id":"f8459125-831e-449f-bacf-fdb13a8912ca","type":"CategoricalAxis"},{"attributes":{"color_mapper":{"id":"72287089-4dcf-4c76-b6d8-d03ce1c8fdfb","type":"LinearColorMapper"},"formatter":{"id":"91ea7462-10fe-4b2e-a55c-61f94426870f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"99ca20a8-f595-43fe-a52d-62da51213803","subtype":"Chart","type":"Plot"},"ticker":{"id":"77424abf-a659-429d-bbb4-942f5c8ce7fc","type":"BasicTicker"}},"id":"2df98948-78df-4168-b3eb-1f1d8ac96d16","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2adc3335-798d-4128-9c2f-4ae5b1b12a41","type":"Rect"}],"root_ids":["ee5b775b-830b-4937-898e-2e952dbef3a5"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"ae23d2fd-9126-4bfb-aaa3-747a5a92af6d","elementid":"02819827-2800-4005-a52b-78bed54c0f62","modelid":"ee5b775b-830b-4937-898e-2e952dbef3a5"}];
                  
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