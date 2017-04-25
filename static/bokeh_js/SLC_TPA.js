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
      };var element = document.getElementById("2fdcb13c-996c-458f-89a7-92c3eb219d17");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2fdcb13c-996c-458f-89a7-92c3eb219d17' but no matching script tag was found. ")
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
                  var docs_json = {"37579c9a-13e5-4eab-bbf6-4caa2caec128":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(22.497, 22.503]"],"chart_index":[{"POS_ARR_DELAY":"(22.497, 22.503]"}],"values":[22.5],"x":[23],"y":["Sunday"]}},"id":"34aa7d34-2ec1-40a3-9e1f-7bb7be323f1e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"}},"id":"40533943-8ada-497b-95f2-28fe08788f75","type":"SaveTool"},{"attributes":{},"id":"4b390abe-b23e-46c1-95bf-2ae6465ee342","type":"BasicTickFormatter"},{"attributes":{},"id":"91b85a5c-3b9f-4baa-bb1f-adb27d69ea08","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"977befa1-141d-422c-84b2-baf803b55dbe","type":"BasicTickFormatter"},"plot":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"},"ticker":{"id":"2e792ef3-2c5e-4b73-bd58-0b1dfece9623","type":"BasicTicker"}},"id":"e501b225-a2ec-4177-84f8-d6e68ad5a4c9","type":"LinearAxis"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"a657ecf2-4beb-4fda-86e2-467c65a4b513","type":"LinearColorMapper"},{"attributes":{},"id":"2e792ef3-2c5e-4b73-bd58-0b1dfece9623","type":"BasicTicker"},{"attributes":{},"id":"0574a381-419c-48cb-83aa-5e884e484788","type":"BasicTickFormatter"},{"attributes":{"callback":null,"tabs":[{"id":"b5339e8a-0a35-49a4-a26e-393f94f816dc","type":"Panel"},{"id":"441b55ba-04ee-4196-a760-7f0d0d4b1e87","type":"Panel"}]},"id":"ea5d4507-824b-4a7c-81c6-89ca098946c2","type":"Tabs"},{"attributes":{},"id":"f0b564f5-a84f-4a15-a2e1-499eb70db9fd","type":"ToolEvents"},{"attributes":{"plot":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"}},"id":"fb23a052-bbd6-49b2-8b34-39f1278c90da","type":"WheelZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"06d07233-9a42-41dc-af58-ce2a49618544","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"},"ticker":{"id":"9a0f2692-6b19-475b-906d-0a9a26ddc0b2","type":"CategoricalTicker"}},"id":"5d87d9b6-0f55-422b-b627-2af8a19e784c","type":"CategoricalAxis"},{"attributes":{},"id":"10111cb3-2725-4221-9776-ce22dd843137","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"}},"id":"c042e0e1-9906-4773-860d-d0be00740dcd","type":"SaveTool"},{"attributes":{"plot":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"}},"id":"6d081161-3ed5-4bbb-9fd7-99221b68b6bc","type":"HelpTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"25607935-cf65-402c-9643-ad3944117aaa","type":"Title"},{"attributes":{},"id":"47d89b1c-7369-48cb-a457-6e3ee0598cce","type":"BasicTicker"},{"attributes":{},"id":"a687a865-de69-4883-8005-3b1df6f9b89b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"}},"id":"acfb1756-5fc0-43a9-a4fe-bf43a2495141","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"031ea5ff-6736-47c0-b15f-2393662f5415","type":"LinearAxis"}],"left":[{"id":"5d87d9b6-0f55-422b-b627-2af8a19e784c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"a65542f7-1976-4bff-835d-77506a8ccb79","type":"BoxAnnotation"},{"id":"c0ffd38c-7193-4b54-a707-01c0dbeed92f","type":"GlyphRenderer"},{"id":"031ea5ff-6736-47c0-b15f-2393662f5415","type":"LinearAxis"},{"id":"5d87d9b6-0f55-422b-b627-2af8a19e784c","type":"CategoricalAxis"},{"id":"4038d53d-be50-482f-b47b-7a03c6cfb01d","type":"ColorBar"}],"right":[{"id":"4038d53d-be50-482f-b47b-7a03c6cfb01d","type":"ColorBar"}],"title":{"id":"fda89342-0b2a-4988-9dc9-7adf4585dad5","type":"Title"},"tool_events":{"id":"f0b564f5-a84f-4a15-a2e1-499eb70db9fd","type":"ToolEvents"},"toolbar":{"id":"c0939f47-0821-4add-9ac5-c16948039698","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"0ab4208b-b8e5-4954-9417-0a160c17840f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"f645151b-0dca-41b2-b6e2-66be9aaff3da","type":"FactorRange"}},"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e501b225-a2ec-4177-84f8-d6e68ad5a4c9","type":"LinearAxis"}],"left":[{"id":"a72d558e-7f87-4a66-bea1-454e7d3d2584","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"3457c554-efdd-48ea-903c-2b30d5181df6","type":"BoxAnnotation"},{"id":"dc84cb76-8a2e-4863-b31d-c0d7d9cafbae","type":"GlyphRenderer"},{"id":"e501b225-a2ec-4177-84f8-d6e68ad5a4c9","type":"LinearAxis"},{"id":"a72d558e-7f87-4a66-bea1-454e7d3d2584","type":"CategoricalAxis"},{"id":"89b4ffdb-3a58-4c8c-95d4-ce06c0f8f3e7","type":"ColorBar"}],"right":[{"id":"89b4ffdb-3a58-4c8c-95d4-ce06c0f8f3e7","type":"ColorBar"}],"title":{"id":"25607935-cf65-402c-9643-ad3944117aaa","type":"Title"},"tool_events":{"id":"573cbadf-cc3f-4e96-bcb1-407901f63e9f","type":"ToolEvents"},"toolbar":{"id":"522e18ce-c00c-4184-9b79-62fb0adec3b1","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"84789976-56c0-42b1-9b94-4a74833978eb","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"08e80a3a-996f-4782-933e-e195b71ae15d","type":"FactorRange"}},"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"34aa7d34-2ec1-40a3-9e1f-7bb7be323f1e","type":"ColumnDataSource"},"glyph":{"id":"de039251-d663-4258-88dc-33592d60e481","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dc84cb76-8a2e-4863-b31d-c0d7d9cafbae","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"0ab4208b-b8e5-4954-9417-0a160c17840f","type":"Range1d"},{"attributes":{"color_mapper":{"id":"a657ecf2-4beb-4fda-86e2-467c65a4b513","type":"LinearColorMapper"},"formatter":{"id":"0574a381-419c-48cb-83aa-5e884e484788","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"},"ticker":{"id":"91b85a5c-3b9f-4baa-bb1f-adb27d69ea08","type":"BasicTicker"}},"id":"89b4ffdb-3a58-4c8c-95d4-ce06c0f8f3e7","type":"ColorBar"},{"attributes":{},"id":"9a0f2692-6b19-475b-906d-0a9a26ddc0b2","type":"CategoricalTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"10111cb3-2725-4221-9776-ce22dd843137","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"},"ticker":{"id":"0f7b4ff3-b76d-4542-a26b-8b7a491da4da","type":"CategoricalTicker"}},"id":"a72d558e-7f87-4a66-bea1-454e7d3d2584","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"}},"id":"d9d0e523-23a8-4aeb-afe7-03cf5d20069d","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(22.497, 22.503]"],"chart_index":[{"POS_ARR_DELAY":"(22.497, 22.503]"}],"values":[22.5],"x":[23],"y":["Sunday"]}},"id":"b5b48ad0-031d-496c-a7f5-8f3f2765d569","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cad2da5-a52d-401f-9f75-d77bbe86f5d7","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6c8c5c1c-4bf6-4f34-abab-6af6ee0ad9cc","type":"PanTool"},{"id":"fb23a052-bbd6-49b2-8b34-39f1278c90da","type":"WheelZoomTool"},{"id":"55290f69-4f8d-47eb-b30a-e425c1bb6b56","type":"BoxZoomTool"},{"id":"c042e0e1-9906-4773-860d-d0be00740dcd","type":"SaveTool"},{"id":"fefb4ea8-ed46-44ef-ab5b-1d08b0282236","type":"ResetTool"},{"id":"6d081161-3ed5-4bbb-9fd7-99221b68b6bc","type":"HelpTool"}]},"id":"c0939f47-0821-4add-9ac5-c16948039698","type":"Toolbar"},{"attributes":{"plot":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"}},"id":"6c8c5c1c-4bf6-4f34-abab-6af6ee0ad9cc","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"acfb1756-5fc0-43a9-a4fe-bf43a2495141","type":"PanTool"},{"id":"d9d0e523-23a8-4aeb-afe7-03cf5d20069d","type":"WheelZoomTool"},{"id":"fd47e073-8104-417f-b30f-ca10da7e00ae","type":"BoxZoomTool"},{"id":"40533943-8ada-497b-95f2-28fe08788f75","type":"SaveTool"},{"id":"e69042f7-a462-436e-94d8-ffc2deac74db","type":"ResetTool"},{"id":"8156a39c-389d-451c-b799-580aa0b3389d","type":"HelpTool"}]},"id":"522e18ce-c00c-4184-9b79-62fb0adec3b1","type":"Toolbar"},{"attributes":{"color_mapper":{"id":"40976166-29c1-42e2-a2f7-f61036944caf","type":"LinearColorMapper"},"formatter":{"id":"4b390abe-b23e-46c1-95bf-2ae6465ee342","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"},"ticker":{"id":"47d89b1c-7369-48cb-a457-6e3ee0598cce","type":"BasicTicker"}},"id":"4038d53d-be50-482f-b47b-7a03c6cfb01d","type":"ColorBar"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"a687a865-de69-4883-8005-3b1df6f9b89b","type":"BasicTickFormatter"},"plot":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"},"ticker":{"id":"458a4e9e-112d-412d-a281-7c8748bc268e","type":"BasicTicker"}},"id":"031ea5ff-6736-47c0-b15f-2393662f5415","type":"LinearAxis"},{"attributes":{"overlay":{"id":"3457c554-efdd-48ea-903c-2b30d5181df6","type":"BoxAnnotation"},"plot":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"}},"id":"fd47e073-8104-417f-b30f-ca10da7e00ae","type":"BoxZoomTool"},{"attributes":{},"id":"977befa1-141d-422c-84b2-baf803b55dbe","type":"BasicTickFormatter"},{"attributes":{},"id":"06d07233-9a42-41dc-af58-ce2a49618544","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"}},"id":"fefb4ea8-ed46-44ef-ab5b-1d08b0282236","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a65542f7-1976-4bff-835d-77506a8ccb79","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"a65542f7-1976-4bff-835d-77506a8ccb79","type":"BoxAnnotation"},"plot":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"}},"id":"55290f69-4f8d-47eb-b30a-e425c1bb6b56","type":"BoxZoomTool"},{"attributes":{},"id":"573cbadf-cc3f-4e96-bcb1-407901f63e9f","type":"ToolEvents"},{"attributes":{},"id":"0f7b4ff3-b76d-4542-a26b-8b7a491da4da","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"08e80a3a-996f-4782-933e-e195b71ae15d","type":"FactorRange"},{"attributes":{"plot":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"}},"id":"e69042f7-a462-436e-94d8-ffc2deac74db","type":"ResetTool"},{"attributes":{"plot":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"}},"id":"8156a39c-389d-451c-b799-580aa0b3389d","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3457c554-efdd-48ea-903c-2b30d5181df6","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":23},"id":"84789976-56c0-42b1-9b94-4a74833978eb","type":"Range1d"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"f645151b-0dca-41b2-b6e2-66be9aaff3da","type":"FactorRange"},{"attributes":{},"id":"458a4e9e-112d-412d-a281-7c8748bc268e","type":"BasicTicker"},{"attributes":{"child":{"id":"80f32cb4-bb27-495f-9e85-6755a7158ee7","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"b5339e8a-0a35-49a4-a26e-393f94f816dc","type":"Panel"},{"attributes":{"data_source":{"id":"b5b48ad0-031d-496c-a7f5-8f3f2765d569","type":"ColumnDataSource"},"glyph":{"id":"5cad2da5-a52d-401f-9f75-d77bbe86f5d7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c0ffd38c-7193-4b54-a707-01c0dbeed92f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"de039251-d663-4258-88dc-33592d60e481","type":"Rect"},{"attributes":{"child":{"id":"5a0023f8-9908-4633-9f93-ceabf0622111","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"441b55ba-04ee-4196-a760-7f0d0d4b1e87","type":"Panel"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"40976166-29c1-42e2-a2f7-f61036944caf","type":"LinearColorMapper"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"fda89342-0b2a-4988-9dc9-7adf4585dad5","type":"Title"}],"root_ids":["ea5d4507-824b-4a7c-81c6-89ca098946c2"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"37579c9a-13e5-4eab-bbf6-4caa2caec128","elementid":"2fdcb13c-996c-458f-89a7-92c3eb219d17","modelid":"ea5d4507-824b-4a7c-81c6-89ca098946c2"}];
                  
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