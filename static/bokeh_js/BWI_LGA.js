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
      };var element = document.getElementById("b41148ac-b0ac-47fb-b567-92b741461b1e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b41148ac-b0ac-47fb-b567-92b741461b1e' but no matching script tag was found. ")
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
                  var docs_json = {"a4aae9e7-a46b-4209-ad7b-385dd7962491":{"roots":{"references":[{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"ca122644-9b46-436f-b595-509df0a7af26","type":"Title"},{"attributes":{},"id":"ac855e91-4d59-4afb-8d51-6c510ee49625","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"ad237d34-ac51-4ad4-8e21-b1d745d4416b","type":"BoxAnnotation"},"plot":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"}},"id":"3241188c-33a1-46f8-ae23-1e082b635e16","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"}},"id":"1bb61a80-775c-4f26-aaf1-186e7bddff70","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.997, 30.00333]"],"chart_index":[{"POS_ARR_DELAY":"(29.997, 30.00333]"}],"values":[30.0],"x":[9],"y":["Thursday"]}},"id":"87f0cf99-2eb8-4a1b-876f-3e3e1381e9a2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"}},"id":"ae3d9399-73cd-4878-8a68-49e2e95e0dd6","type":"HelpTool"},{"attributes":{},"id":"55d51ee7-7ed5-4fd7-a70d-c90719bea647","type":"BasicTicker"},{"attributes":{"data_source":{"id":"43ca1635-12e5-471c-ad41-d9340c66ef4b","type":"ColumnDataSource"},"glyph":{"id":"0a54e768-e31b-4247-b327-e6fe7c9a233e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"71a9bf51-5624-4dc4-b755-af9f7f3db471","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"}},"id":"9c3f03c4-00d1-4d57-9228-cc8cc7450e5d","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"87f0cf99-2eb8-4a1b-876f-3e3e1381e9a2","type":"ColumnDataSource"},"glyph":{"id":"f04e6f0f-cb4f-4601-a9fb-eedf1c4dbe06","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e49292a3-93f8-4947-bc61-e7241cacda70","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"f8ad493d-f165-48ba-8e8e-cffe66bfe28e","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"},"ticker":{"id":"1d9e312f-06fa-4109-aea0-24129ef58fb5","type":"CategoricalTicker"}},"id":"01e641e0-98e2-4e76-b08e-38a66ebd809a","type":"CategoricalAxis"},{"attributes":{"child":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"8a16a832-d41a-407b-8601-dbe08b764d81","type":"Panel"},{"attributes":{"plot":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"}},"id":"4727e65b-d87e-4111-9dc5-0c54d394aef6","type":"WheelZoomTool"},{"attributes":{"color_mapper":{"id":"5514248c-06a0-4951-bca6-e54444157ae2","type":"LinearColorMapper"},"formatter":{"id":"b1f74ce5-6426-4f7c-963c-cc4f6fdb855e","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"},"ticker":{"id":"ac597661-fe38-477f-beba-ae5928d6644c","type":"BasicTicker"}},"id":"2814726c-209d-44ae-bf94-c766be314667","type":"ColorBar"},{"attributes":{},"id":"b1f74ce5-6426-4f7c-963c-cc4f6fdb855e","type":"BasicTickFormatter"},{"attributes":{},"id":"917273f9-a4c7-46af-abe7-c1be0586eb84","type":"CategoricalTickFormatter"},{"attributes":{},"id":"f8ad493d-f165-48ba-8e8e-cffe66bfe28e","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"9082d0fa-209c-4d72-8009-a2a07b89ea7c","type":"BasicTickFormatter"},"plot":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"},"ticker":{"id":"5af1967c-a55d-4bd7-92e5-40bd695d632f","type":"BasicTicker"}},"id":"3030753e-29e2-407a-8b3c-10ebbfc72bf1","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a54e768-e31b-4247-b327-e6fe7c9a233e","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ad237d34-ac51-4ad4-8e21-b1d745d4416b","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":23},"id":"aed5210c-7bdd-45dc-b70c-ba47ffac359c","type":"Range1d"},{"attributes":{"child":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"},"title":"EV"},"id":"a579d0fc-ce8a-408a-a20d-5cd63ca78d92","type":"Panel"},{"attributes":{},"id":"194aa681-55c4-4357-b8c7-9d164017aa7c","type":"ToolEvents"},{"attributes":{"callback":null,"end":23},"id":"19fd47c9-2109-486a-9b63-3e0deb939ad7","type":"Range1d"},{"attributes":{"color_mapper":{"id":"85ce1a2f-067f-4eac-846e-3d3055f78b42","type":"LinearColorMapper"},"formatter":{"id":"9f8f1f88-b82a-44c6-9f11-fd4c1d29d9f9","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"},"ticker":{"id":"55d51ee7-7ed5-4fd7-a70d-c90719bea647","type":"BasicTicker"}},"id":"47060b80-d6bd-43df-ade8-a51a62478d55","type":"ColorBar"},{"attributes":{"callback":null,"tabs":[{"id":"8a16a832-d41a-407b-8601-dbe08b764d81","type":"Panel"},{"id":"a579d0fc-ce8a-408a-a20d-5cd63ca78d92","type":"Panel"}]},"id":"e8a1f469-dcb9-48fd-92ab-6887c9e1f6c0","type":"Tabs"},{"attributes":{"callback":null,"factors":["Thursday","Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"]},"id":"1e896bc8-c1b8-4b6c-8b8f-9705ec824054","type":"FactorRange"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"917273f9-a4c7-46af-abe7-c1be0586eb84","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"},"ticker":{"id":"032b5d8b-cf30-402c-b87e-2dd9f3e722d7","type":"CategoricalTicker"}},"id":"95af001f-b870-4a30-9fbf-cf32f75260e1","type":"CategoricalAxis"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"ac855e91-4d59-4afb-8d51-6c510ee49625","type":"BasicTickFormatter"},"plot":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"},"ticker":{"id":"505f16bb-f46b-4a74-a97d-7dd7d37fac76","type":"BasicTicker"}},"id":"ff661710-e827-4738-973a-3220d922cc24","type":"LinearAxis"},{"attributes":{"plot":null,"text":"ExpressJet Airlines "},"id":"a79c1a5e-40e9-42dc-bf61-d8d67051ca1c","type":"Title"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"ff661710-e827-4738-973a-3220d922cc24","type":"LinearAxis"}],"left":[{"id":"01e641e0-98e2-4e76-b08e-38a66ebd809a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"a1ceb4a8-376e-4ef0-9b52-b08ff8cd751a","type":"BoxAnnotation"},{"id":"e49292a3-93f8-4947-bc61-e7241cacda70","type":"GlyphRenderer"},{"id":"ff661710-e827-4738-973a-3220d922cc24","type":"LinearAxis"},{"id":"01e641e0-98e2-4e76-b08e-38a66ebd809a","type":"CategoricalAxis"},{"id":"2814726c-209d-44ae-bf94-c766be314667","type":"ColorBar"}],"right":[{"id":"2814726c-209d-44ae-bf94-c766be314667","type":"ColorBar"}],"title":{"id":"ca122644-9b46-436f-b595-509df0a7af26","type":"Title"},"tool_events":{"id":"3ad8b67d-8076-4dfe-a643-a671067932ec","type":"ToolEvents"},"toolbar":{"id":"3f2967c2-54c7-4319-9306-624c16bcedf5","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"aed5210c-7bdd-45dc-b70c-ba47ffac359c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"7ae8acec-989f-4a39-b342-eff5eeef537a","type":"FactorRange"}},"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"1d9e312f-06fa-4109-aea0-24129ef58fb5","type":"CategoricalTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5514248c-06a0-4951-bca6-e54444157ae2","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f04e6f0f-cb4f-4601-a9fb-eedf1c4dbe06","type":"Rect"},{"attributes":{"plot":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"}},"id":"6122a98a-6a39-4eec-97f0-a44df90dbdd0","type":"SaveTool"},{"attributes":{},"id":"9f8f1f88-b82a-44c6-9f11-fd4c1d29d9f9","type":"BasicTickFormatter"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"85ce1a2f-067f-4eac-846e-3d3055f78b42","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"}},"id":"a55e8877-4912-47c8-a500-83e3f937ff58","type":"PanTool"},{"attributes":{"plot":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"}},"id":"8efe51ce-20f1-46ed-8b69-2a5960a996a3","type":"SaveTool"},{"attributes":{"plot":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"}},"id":"3359ead2-0861-4176-995b-41551b671255","type":"ResetTool"},{"attributes":{},"id":"505f16bb-f46b-4a74-a97d-7dd7d37fac76","type":"BasicTicker"},{"attributes":{"plot":{"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"}},"id":"5fc1b540-52d4-439a-9aaa-98c5064bf456","type":"PanTool"},{"attributes":{"callback":null,"factors":["Thursday","Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"]},"id":"7ae8acec-989f-4a39-b342-eff5eeef537a","type":"FactorRange"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a1ceb4a8-376e-4ef0-9b52-b08ff8cd751a","type":"BoxAnnotation"},{"attributes":{},"id":"5af1967c-a55d-4bd7-92e5-40bd695d632f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.997, 30.00333]"],"chart_index":[{"POS_ARR_DELAY":"(29.997, 30.00333]"}],"values":[30.0],"x":[9],"y":["Thursday"]}},"id":"43ca1635-12e5-471c-ad41-d9340c66ef4b","type":"ColumnDataSource"},{"attributes":{},"id":"9082d0fa-209c-4d72-8009-a2a07b89ea7c","type":"BasicTickFormatter"},{"attributes":{},"id":"3ad8b67d-8076-4dfe-a643-a671067932ec","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a55e8877-4912-47c8-a500-83e3f937ff58","type":"PanTool"},{"id":"9c3f03c4-00d1-4d57-9228-cc8cc7450e5d","type":"WheelZoomTool"},{"id":"4f3956c0-c096-4644-bae2-b7dea80a657d","type":"BoxZoomTool"},{"id":"6122a98a-6a39-4eec-97f0-a44df90dbdd0","type":"SaveTool"},{"id":"3359ead2-0861-4176-995b-41551b671255","type":"ResetTool"},{"id":"008ae451-d5fb-4f69-875d-89ab44057197","type":"HelpTool"}]},"id":"3f2967c2-54c7-4319-9306-624c16bcedf5","type":"Toolbar"},{"attributes":{},"id":"ac597661-fe38-477f-beba-ae5928d6644c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"a1ceb4a8-376e-4ef0-9b52-b08ff8cd751a","type":"BoxAnnotation"},"plot":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"}},"id":"4f3956c0-c096-4644-bae2-b7dea80a657d","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"c38bb800-8d71-4b08-8d2e-cd10b1b29545","subtype":"Chart","type":"Plot"}},"id":"008ae451-d5fb-4f69-875d-89ab44057197","type":"HelpTool"},{"attributes":{},"id":"032b5d8b-cf30-402c-b87e-2dd9f3e722d7","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5fc1b540-52d4-439a-9aaa-98c5064bf456","type":"PanTool"},{"id":"4727e65b-d87e-4111-9dc5-0c54d394aef6","type":"WheelZoomTool"},{"id":"3241188c-33a1-46f8-ae23-1e082b635e16","type":"BoxZoomTool"},{"id":"8efe51ce-20f1-46ed-8b69-2a5960a996a3","type":"SaveTool"},{"id":"1bb61a80-775c-4f26-aaf1-186e7bddff70","type":"ResetTool"},{"id":"ae3d9399-73cd-4878-8a68-49e2e95e0dd6","type":"HelpTool"}]},"id":"2b599127-7716-46f2-a56b-7441cad143c5","type":"Toolbar"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3030753e-29e2-407a-8b3c-10ebbfc72bf1","type":"LinearAxis"}],"left":[{"id":"95af001f-b870-4a30-9fbf-cf32f75260e1","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ad237d34-ac51-4ad4-8e21-b1d745d4416b","type":"BoxAnnotation"},{"id":"71a9bf51-5624-4dc4-b755-af9f7f3db471","type":"GlyphRenderer"},{"id":"3030753e-29e2-407a-8b3c-10ebbfc72bf1","type":"LinearAxis"},{"id":"95af001f-b870-4a30-9fbf-cf32f75260e1","type":"CategoricalAxis"},{"id":"47060b80-d6bd-43df-ade8-a51a62478d55","type":"ColorBar"}],"right":[{"id":"47060b80-d6bd-43df-ade8-a51a62478d55","type":"ColorBar"}],"title":{"id":"a79c1a5e-40e9-42dc-bf61-d8d67051ca1c","type":"Title"},"tool_events":{"id":"194aa681-55c4-4357-b8c7-9d164017aa7c","type":"ToolEvents"},"toolbar":{"id":"2b599127-7716-46f2-a56b-7441cad143c5","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"19fd47c9-2109-486a-9b63-3e0deb939ad7","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1e896bc8-c1b8-4b6c-8b8f-9705ec824054","type":"FactorRange"}},"id":"3ff3be68-3ca5-4d89-b89f-98b053ffd013","subtype":"Chart","type":"Plot"}],"root_ids":["e8a1f469-dcb9-48fd-92ab-6887c9e1f6c0"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"a4aae9e7-a46b-4209-ad7b-385dd7962491","elementid":"b41148ac-b0ac-47fb-b567-92b741461b1e","modelid":"e8a1f469-dcb9-48fd-92ab-6887c9e1f6c0"}];
                  
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