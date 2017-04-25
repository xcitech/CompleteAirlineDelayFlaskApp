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
      };var element = document.getElementById("02624157-cd3a-4f2b-ab37-929d103129a9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '02624157-cd3a-4f2b-ab37-929d103129a9' but no matching script tag was found. ")
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
                  var docs_json = {"e88d82d0-71e0-4b48-a4ee-b32c4af6735c":{"roots":{"references":[{"attributes":{"color_mapper":{"id":"84fb8c7d-4b26-4a85-a5e6-f893b5e67b21","type":"LinearColorMapper"},"formatter":{"id":"7cb97638-64b6-4002-808b-df26baae99fd","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"},"ticker":{"id":"89c7e8a1-4371-4686-bb82-63ca86aa87c4","type":"BasicTicker"}},"id":"32690dfb-0f22-4b6e-8e4e-eaea766fb0af","type":"ColorBar"},{"attributes":{},"id":"438e2704-4ed9-4600-8611-aa4a8f49ddcc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"}},"id":"97f3b1cc-508b-4eba-a90f-a2fb204e627c","type":"ResetTool"},{"attributes":{},"id":"8d885ab4-02c7-4736-9ca8-95b012d88b7e","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1ff225a5-df8e-49f2-aff4-d255db50a266","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"1ff225a5-df8e-49f2-aff4-d255db50a266","type":"BasicTickFormatter"},"plot":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"},"ticker":{"id":"689bf615-1cc5-45d9-bceb-b4edc478b807","type":"BasicTicker"}},"id":"9dbdd2c0-8b09-45ab-a359-0438d3867ae5","type":"LinearAxis"},{"attributes":{},"id":"736122bb-671d-49ba-bf58-1474917a76fa","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c3df888-8ed8-48fd-898d-df2c158aa3d1","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2efed4a1-c3d7-466d-ad4e-fcc638b41f0f","type":"PanTool"},{"id":"c00bbcbe-6637-407b-8ee2-397fff79ecfd","type":"WheelZoomTool"},{"id":"40dc71c0-0dea-48e3-ad7a-0e7ba67af1c4","type":"BoxZoomTool"},{"id":"d91aad35-a1fc-43a8-95c8-9908c16bea83","type":"SaveTool"},{"id":"53a5b50c-6faa-4b47-9e97-451c4012cb98","type":"ResetTool"},{"id":"59af8ff8-d9c9-41af-b43c-28a4a92fb759","type":"HelpTool"}]},"id":"56a1ad82-bf20-488b-9eb5-701e4122be66","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a7e8779-dcc2-4349-99f9-5689cd2bb357","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"263497c2-4492-4d5f-aab4-740c8773b5bf","type":"Range1d"},{"attributes":{"plot":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"}},"id":"59af8ff8-d9c9-41af-b43c-28a4a92fb759","type":"HelpTool"},{"attributes":{},"id":"a86cddf9-ff1e-4388-ada0-70a2ba5523a5","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"}},"id":"c00bbcbe-6637-407b-8ee2-397fff79ecfd","type":"WheelZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"438e2704-4ed9-4600-8611-aa4a8f49ddcc","type":"BasicTickFormatter"},"plot":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"},"ticker":{"id":"71b3aa4d-8db8-4bfe-8547-9b1d34591a24","type":"BasicTicker"}},"id":"82fcece1-b8a8-40c8-b5d6-bf1b086a7326","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.9, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.9, 30]"}],"values":[30.0],"x":[17],"y":["Saturday"]}},"id":"200d2dd7-748d-44a0-b382-b3d7c8dbed35","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"8d885ab4-02c7-4736-9ca8-95b012d88b7e","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"},"ticker":{"id":"f6b7afeb-b269-4963-8f32-a84508626703","type":"CategoricalTicker"}},"id":"998a47ce-e3c3-402b-b598-12a421b15ce2","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"}},"id":"2efed4a1-c3d7-466d-ad4e-fcc638b41f0f","type":"PanTool"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"e3bc47bf-0264-4f20-a18e-42f14128b129","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[2.08, 5.2]"],"chart_index":[{"POS_ARR_DELAY":"[2.08, 5.2]"}],"values":[2.111111111111111],"x":[16],"y":["Saturday"]}},"id":"5a88cf7e-026b-4749-a69b-e233a942cf83","type":"ColumnDataSource"},{"attributes":{},"id":"6f2bb13a-3333-4bef-adda-5a4b551afb93","type":"ToolEvents"},{"attributes":{"overlay":{"id":"6b6dd12d-1d92-4705-8d51-1a70628d46ad","type":"BoxAnnotation"},"plot":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"}},"id":"40dc71c0-0dea-48e3-ad7a-0e7ba67af1c4","type":"BoxZoomTool"},{"attributes":{"child":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"1e158c0c-ffaf-4b3e-96a6-dc2484466539","type":"Panel"},{"attributes":{"plot":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"}},"id":"51905279-e316-40e3-82c6-a76e699e0ae5","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6b6dd12d-1d92-4705-8d51-1a70628d46ad","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"bac14448-b295-4b76-b534-eb89af72e112","type":"Title"},{"attributes":{"plot":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"}},"id":"5d0d2a36-a560-4f10-8e82-46333e9cabf3","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":23},"id":"4214ee5e-0b4d-49ed-b82c-66f9c1013f90","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec8edfe6-cb29-42f0-b67a-516cafe583ee","type":"Rect"},{"attributes":{},"id":"71b3aa4d-8db8-4bfe-8547-9b1d34591a24","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d3bd209-7132-43b0-9f0d-abe8c961e744","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"934c0b61-9c85-4732-b441-3fbda26d3ac2","type":"Panel"},{"id":"1e158c0c-ffaf-4b3e-96a6-dc2484466539","type":"Panel"}]},"id":"a15b6ffb-ee06-437e-a8ec-a6c2e9945be5","type":"Tabs"},{"attributes":{"data_source":{"id":"6103a0a4-df77-4c3e-871f-36939722896b","type":"ColumnDataSource"},"glyph":{"id":"7a7e8779-dcc2-4349-99f9-5689cd2bb357","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f8136372-935f-46f9-9f4e-4fb5804e76ee","type":"GlyphRenderer"},{"attributes":{},"id":"311c9451-59eb-4306-8b4d-78a194844b48","type":"ToolEvents"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"84fb8c7d-4b26-4a85-a5e6-f893b5e67b21","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"}},"id":"d91aad35-a1fc-43a8-95c8-9908c16bea83","type":"SaveTool"},{"attributes":{"plot":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"}},"id":"43f73b3d-54b6-475d-b774-a3bb7b4ebcd6","type":"HelpTool"},{"attributes":{"color_mapper":{"id":"26ea8f22-dce0-43b5-abb3-d819ac215de9","type":"LinearColorMapper"},"formatter":{"id":"736122bb-671d-49ba-bf58-1474917a76fa","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"},"ticker":{"id":"7c5fd118-df0a-499e-b20b-82ec81423386","type":"BasicTicker"}},"id":"7ad89c20-2799-4340-982d-4c88f6de9ed5","type":"ColorBar"},{"attributes":{"data_source":{"id":"5a88cf7e-026b-4749-a69b-e233a942cf83","type":"ColumnDataSource"},"glyph":{"id":"ec8edfe6-cb29-42f0-b67a-516cafe583ee","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"32b2e420-a865-4af1-afa8-cc534bca862a","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"a9654097-eb9a-44b6-87f0-c0b7b6d74509","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9ce96bea-5181-4ccb-8c0e-31ca7ee2768c","type":"PanTool"},{"id":"5d0d2a36-a560-4f10-8e82-46333e9cabf3","type":"WheelZoomTool"},{"id":"691079c1-703d-4c53-9db7-176047ab11d8","type":"BoxZoomTool"},{"id":"51905279-e316-40e3-82c6-a76e699e0ae5","type":"SaveTool"},{"id":"97f3b1cc-508b-4eba-a90f-a2fb204e627c","type":"ResetTool"},{"id":"43f73b3d-54b6-475d-b774-a3bb7b4ebcd6","type":"HelpTool"}]},"id":"fec37be4-817c-47cf-89e8-fdca723dd884","type":"Toolbar"},{"attributes":{"data_source":{"id":"200d2dd7-748d-44a0-b382-b3d7c8dbed35","type":"ColumnDataSource"},"glyph":{"id":"3d3bd209-7132-43b0-9f0d-abe8c961e744","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9917211a-d44f-4888-ad23-5348ab101857","type":"GlyphRenderer"},{"attributes":{},"id":"7d8a2d19-2c89-49c0-bd78-3b2710ce73f3","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[2.08, 5.2]"],"chart_index":[{"POS_ARR_DELAY":"[2.08, 5.2]"}],"values":[2.111111111111111],"x":[16],"y":["Saturday"]}},"id":"f8cc0aff-d139-48dc-bcc6-ac200347cc62","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"82fcece1-b8a8-40c8-b5d6-bf1b086a7326","type":"LinearAxis"}],"left":[{"id":"998a47ce-e3c3-402b-b598-12a421b15ce2","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"21beb686-a9d5-4841-ba1e-b87a7953e607","type":"BoxAnnotation"},{"id":"9917211a-d44f-4888-ad23-5348ab101857","type":"GlyphRenderer"},{"id":"0ae19b4c-42ee-489c-a9fc-fc89cf819380","type":"GlyphRenderer"},{"id":"82fcece1-b8a8-40c8-b5d6-bf1b086a7326","type":"LinearAxis"},{"id":"998a47ce-e3c3-402b-b598-12a421b15ce2","type":"CategoricalAxis"},{"id":"32690dfb-0f22-4b6e-8e4e-eaea766fb0af","type":"ColorBar"}],"right":[{"id":"32690dfb-0f22-4b6e-8e4e-eaea766fb0af","type":"ColorBar"}],"title":{"id":"4ff27541-6fd1-4718-8db2-c2392f0608fd","type":"Title"},"tool_events":{"id":"6f2bb13a-3333-4bef-adda-5a4b551afb93","type":"ToolEvents"},"toolbar":{"id":"fec37be4-817c-47cf-89e8-fdca723dd884","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"4214ee5e-0b4d-49ed-b82c-66f9c1013f90","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a9654097-eb9a-44b6-87f0-c0b7b6d74509","type":"FactorRange"}},"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"},{"attributes":{"overlay":{"id":"21beb686-a9d5-4841-ba1e-b87a7953e607","type":"BoxAnnotation"},"plot":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"}},"id":"691079c1-703d-4c53-9db7-176047ab11d8","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"4ff27541-6fd1-4718-8db2-c2392f0608fd","type":"Title"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"26ea8f22-dce0-43b5-abb3-d819ac215de9","type":"LinearColorMapper"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21beb686-a9d5-4841-ba1e-b87a7953e607","type":"BoxAnnotation"},{"attributes":{},"id":"f6b7afeb-b269-4963-8f32-a84508626703","type":"CategoricalTicker"},{"attributes":{},"id":"7cb97638-64b6-4002-808b-df26baae99fd","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"9dbdd2c0-8b09-45ab-a359-0438d3867ae5","type":"LinearAxis"}],"left":[{"id":"02593999-70a1-4ba9-8f99-29f12f1bc8bc","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"6b6dd12d-1d92-4705-8d51-1a70628d46ad","type":"BoxAnnotation"},{"id":"f8136372-935f-46f9-9f4e-4fb5804e76ee","type":"GlyphRenderer"},{"id":"32b2e420-a865-4af1-afa8-cc534bca862a","type":"GlyphRenderer"},{"id":"9dbdd2c0-8b09-45ab-a359-0438d3867ae5","type":"LinearAxis"},{"id":"02593999-70a1-4ba9-8f99-29f12f1bc8bc","type":"CategoricalAxis"},{"id":"7ad89c20-2799-4340-982d-4c88f6de9ed5","type":"ColorBar"}],"right":[{"id":"7ad89c20-2799-4340-982d-4c88f6de9ed5","type":"ColorBar"}],"title":{"id":"bac14448-b295-4b76-b534-eb89af72e112","type":"Title"},"tool_events":{"id":"311c9451-59eb-4306-8b4d-78a194844b48","type":"ToolEvents"},"toolbar":{"id":"56a1ad82-bf20-488b-9eb5-701e4122be66","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"263497c2-4492-4d5f-aab4-740c8773b5bf","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e3bc47bf-0264-4f20-a18e-42f14128b129","type":"FactorRange"}},"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"689bf615-1cc5-45d9-bceb-b4edc478b807","type":"BasicTicker"},{"attributes":{"plot":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"}},"id":"53a5b50c-6faa-4b47-9e97-451c4012cb98","type":"ResetTool"},{"attributes":{"child":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"934c0b61-9c85-4732-b441-3fbda26d3ac2","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.9, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.9, 30]"}],"values":[30.0],"x":[17],"y":["Saturday"]}},"id":"6103a0a4-df77-4c3e-871f-36939722896b","type":"ColumnDataSource"},{"attributes":{},"id":"89c7e8a1-4371-4686-bb82-63ca86aa87c4","type":"BasicTicker"},{"attributes":{"plot":{"id":"206ac5bc-ae9d-47dd-9943-a95bd2580873","subtype":"Chart","type":"Plot"}},"id":"9ce96bea-5181-4ccb-8c0e-31ca7ee2768c","type":"PanTool"},{"attributes":{},"id":"7c5fd118-df0a-499e-b20b-82ec81423386","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f8cc0aff-d139-48dc-bcc6-ac200347cc62","type":"ColumnDataSource"},"glyph":{"id":"0c3df888-8ed8-48fd-898d-df2c158aa3d1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0ae19b4c-42ee-489c-a9fc-fc89cf819380","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"7d8a2d19-2c89-49c0-bd78-3b2710ce73f3","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a4a0525f-11b2-4854-b090-07bdfc078751","subtype":"Chart","type":"Plot"},"ticker":{"id":"a86cddf9-ff1e-4388-ada0-70a2ba5523a5","type":"CategoricalTicker"}},"id":"02593999-70a1-4ba9-8f99-29f12f1bc8bc","type":"CategoricalAxis"}],"root_ids":["a15b6ffb-ee06-437e-a8ec-a6c2e9945be5"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"e88d82d0-71e0-4b48-a4ee-b32c4af6735c","elementid":"02624157-cd3a-4f2b-ab37-929d103129a9","modelid":"a15b6ffb-ee06-437e-a8ec-a6c2e9945be5"}];
                  
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