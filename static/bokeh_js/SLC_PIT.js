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
      };var element = document.getElementById("4c9b5201-6350-447b-b91c-1fe2ff2cfb74");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c9b5201-6350-447b-b91c-1fe2ff2cfb74' but no matching script tag was found. ")
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
                  var docs_json = {"9274cf0b-d45b-46bd-a8fb-59a6df88e31d":{"roots":{"references":[{"attributes":{"callback":null,"tabs":[{"id":"03f42f2b-ec6f-48ea-8859-bb0fd7eee372","type":"Panel"},{"id":"a69c9ff4-6dfd-47fb-9f87-cb6a640573c1","type":"Panel"}]},"id":"4f47ec5c-ce81-4f7d-ae5f-ab0a76489284","type":"Tabs"},{"attributes":{},"id":"15d58912-6400-4c66-8ad1-2b77e5bbe02f","type":"CategoricalTicker"},{"attributes":{},"id":"aebd3c34-7e88-46fc-86a9-8cf910686088","type":"BasicTicker"},{"attributes":{"plot":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"}},"id":"eb20f8ee-5b6f-4bb8-8e41-f68a7e7745a7","type":"WheelZoomTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"42e847ef-d993-4f70-a438-b1c8b8ee6e36","type":"LinearAxis"}],"left":[{"id":"0489ba90-d740-4978-a59d-9811561a1655","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"3749fefb-63d3-4da1-a511-d48cdb14bfc6","type":"BoxAnnotation"},{"id":"7237860f-c404-4e35-9616-0b819ae1d33e","type":"GlyphRenderer"},{"id":"42e847ef-d993-4f70-a438-b1c8b8ee6e36","type":"LinearAxis"},{"id":"0489ba90-d740-4978-a59d-9811561a1655","type":"CategoricalAxis"},{"id":"313ceea7-8a0b-48ab-912c-f23cb9dba90e","type":"ColorBar"}],"right":[{"id":"313ceea7-8a0b-48ab-912c-f23cb9dba90e","type":"ColorBar"}],"title":{"id":"ba719ead-01ee-4da0-a339-068adbbdc94f","type":"Title"},"tool_events":{"id":"b1f13935-4c7c-437d-9806-3f153b5b838d","type":"ToolEvents"},"toolbar":{"id":"8e976eef-cf73-4f77-af43-2537aa474045","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"b94438f2-0b01-4435-8d06-9aca29e11b87","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"42584dbe-f569-423e-9cb1-53d334186678","type":"FactorRange"}},"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"fe54e3f9-e088-4225-a2de-0328aef997da","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"}},"id":"41e8640c-eec7-4d8c-942d-51e8f790ebbd","type":"ResetTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"da3d020a-4b5b-4f09-b290-4c8cc85e6a3a","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"},"ticker":{"id":"72f8ebe2-7fa1-4340-a755-6e59a13eda13","type":"CategoricalTicker"}},"id":"9a78c057-6ad1-4962-8783-3afc2b15d56a","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"ba719ead-01ee-4da0-a339-068adbbdc94f","type":"Title"},{"attributes":{},"id":"72f8ebe2-7fa1-4340-a755-6e59a13eda13","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"ee94fbb9-1acc-46c2-b813-429e7f4b020b","type":"BoxAnnotation"},"plot":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"}},"id":"44b49e03-e15a-478a-b5d9-f1ded4380d9a","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ee94fbb9-1acc-46c2-b813-429e7f4b020b","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"e9c03e7a-008e-4882-b5d0-29490b7c089f","type":"ColumnDataSource"},"glyph":{"id":"bcd261dc-696e-427a-bd3a-c58724ec81cd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7237860f-c404-4e35-9616-0b819ae1d33e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"24fdd1d9-e606-4580-9fe3-50aac66885cc","type":"ColumnDataSource"},"glyph":{"id":"6bf0b928-a376-4d1f-a120-fa47637db24d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"582cc948-b032-4fea-bfbd-3268a7289788","type":"GlyphRenderer"},{"attributes":{},"id":"79c923dd-cc35-4b42-b3fd-84d7298ac162","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"26de72b4-9cfa-4b43-b492-c642c787c6c1","type":"PanTool"},{"id":"eb20f8ee-5b6f-4bb8-8e41-f68a7e7745a7","type":"WheelZoomTool"},{"id":"44b49e03-e15a-478a-b5d9-f1ded4380d9a","type":"BoxZoomTool"},{"id":"e1de45f1-e02c-4002-9753-b1c63de00301","type":"SaveTool"},{"id":"745632a8-c34b-4607-b529-6d7dae86a3b8","type":"ResetTool"},{"id":"e1b95674-a7f9-494f-b784-829cd9106499","type":"HelpTool"}]},"id":"b8fce579-b153-4a2c-ae59-ad40a4cba30c","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"42584dbe-f569-423e-9cb1-53d334186678","type":"FactorRange"},{"attributes":{},"id":"9a175e67-cfd5-48d3-912d-e64cff517ee9","type":"BasicTicker"},{"attributes":{"plot":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"}},"id":"e1de45f1-e02c-4002-9753-b1c63de00301","type":"SaveTool"},{"attributes":{"callback":null,"end":23},"id":"b9b71261-aab0-4509-bcd8-25b703eae127","type":"Range1d"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"2f9415c3-41b7-46b8-947b-1129d34a1563","type":"LinearColorMapper"},{"attributes":{"child":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"03f42f2b-ec6f-48ea-8859-bb0fd7eee372","type":"Panel"},{"attributes":{"plot":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"}},"id":"745632a8-c34b-4607-b529-6d7dae86a3b8","type":"ResetTool"},{"attributes":{"plot":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"}},"id":"e18e808c-3647-4585-95ee-c28f0bc2e6e6","type":"PanTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"79c923dd-cc35-4b42-b3fd-84d7298ac162","type":"BasicTickFormatter"},"plot":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"},"ticker":{"id":"9a175e67-cfd5-48d3-912d-e64cff517ee9","type":"BasicTicker"}},"id":"8d3232e2-ed09-422a-aa8b-c34e378f6ec1","type":"LinearAxis"},{"attributes":{},"id":"3fe82baf-c4a9-4bae-be29-1a1b4442a7d0","type":"ToolEvents"},{"attributes":{},"id":"2eaf6d25-5636-4a2e-8b24-b9d71572ff44","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bcd261dc-696e-427a-bd3a-c58724ec81cd","type":"Rect"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"e4025519-0b3c-49b7-8f5d-29d2c0081de6","type":"FactorRange"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3749fefb-63d3-4da1-a511-d48cdb14bfc6","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"f86a78dd-ef1f-4c21-a805-5c29239e4b09","type":"Title"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"55c08f30-bca5-40d3-830f-57e3ae2c9113","type":"LinearColorMapper"},{"attributes":{},"id":"8a692fd4-2a68-4259-aef5-494ee14acb17","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e18e808c-3647-4585-95ee-c28f0bc2e6e6","type":"PanTool"},{"id":"f654e036-27f0-45ea-b078-8e35995959f4","type":"WheelZoomTool"},{"id":"610823c2-7d38-46e9-b422-db9d282020db","type":"BoxZoomTool"},{"id":"f1c91281-c679-488d-ac2e-3c232113e81b","type":"SaveTool"},{"id":"41e8640c-eec7-4d8c-942d-51e8f790ebbd","type":"ResetTool"},{"id":"d7995ae1-b510-4eb0-8464-ef923587f6b8","type":"HelpTool"}]},"id":"8e976eef-cf73-4f77-af43-2537aa474045","type":"Toolbar"},{"attributes":{},"id":"6064c92f-82ab-4770-b1a9-488fe5c4da8a","type":"BasicTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"78e9a9cd-510d-4eec-b712-43aae89646dc","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"},"ticker":{"id":"15d58912-6400-4c66-8ad1-2b77e5bbe02f","type":"CategoricalTicker"}},"id":"0489ba90-d740-4978-a59d-9811561a1655","type":"CategoricalAxis"},{"attributes":{},"id":"da3d020a-4b5b-4f09-b290-4c8cc85e6a3a","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.999, 10.00111]"],"chart_index":[{"POS_ARR_DELAY":"(9.999, 10.00111]"}],"values":[10.0],"x":[23],"y":["Sunday"]}},"id":"24fdd1d9-e606-4580-9fe3-50aac66885cc","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"}},"id":"f1c91281-c679-488d-ac2e-3c232113e81b","type":"SaveTool"},{"attributes":{"color_mapper":{"id":"55c08f30-bca5-40d3-830f-57e3ae2c9113","type":"LinearColorMapper"},"formatter":{"id":"fe54e3f9-e088-4225-a2de-0328aef997da","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"},"ticker":{"id":"6064c92f-82ab-4770-b1a9-488fe5c4da8a","type":"BasicTicker"}},"id":"d0d5c46b-d041-41de-974d-079387b2a6b6","type":"ColorBar"},{"attributes":{},"id":"b1f13935-4c7c-437d-9806-3f153b5b838d","type":"ToolEvents"},{"attributes":{"child":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"a69c9ff4-6dfd-47fb-9f87-cb6a640573c1","type":"Panel"},{"attributes":{"plot":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"}},"id":"e1b95674-a7f9-494f-b784-829cd9106499","type":"HelpTool"},{"attributes":{},"id":"78e9a9cd-510d-4eec-b712-43aae89646dc","type":"CategoricalTickFormatter"},{"attributes":{},"id":"17545cf8-5d39-4ef5-888e-b4aae2044ec8","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"8a692fd4-2a68-4259-aef5-494ee14acb17","type":"BasicTickFormatter"},"plot":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"},"ticker":{"id":"aebd3c34-7e88-46fc-86a9-8cf910686088","type":"BasicTicker"}},"id":"42e847ef-d993-4f70-a438-b1c8b8ee6e36","type":"LinearAxis"},{"attributes":{"plot":{"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"}},"id":"26de72b4-9cfa-4b43-b492-c642c787c6c1","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"8d3232e2-ed09-422a-aa8b-c34e378f6ec1","type":"LinearAxis"}],"left":[{"id":"9a78c057-6ad1-4962-8783-3afc2b15d56a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ee94fbb9-1acc-46c2-b813-429e7f4b020b","type":"BoxAnnotation"},{"id":"582cc948-b032-4fea-bfbd-3268a7289788","type":"GlyphRenderer"},{"id":"8d3232e2-ed09-422a-aa8b-c34e378f6ec1","type":"LinearAxis"},{"id":"9a78c057-6ad1-4962-8783-3afc2b15d56a","type":"CategoricalAxis"},{"id":"d0d5c46b-d041-41de-974d-079387b2a6b6","type":"ColorBar"}],"right":[{"id":"d0d5c46b-d041-41de-974d-079387b2a6b6","type":"ColorBar"}],"title":{"id":"f86a78dd-ef1f-4c21-a805-5c29239e4b09","type":"Title"},"tool_events":{"id":"3fe82baf-c4a9-4bae-be29-1a1b4442a7d0","type":"ToolEvents"},"toolbar":{"id":"b8fce579-b153-4a2c-ae59-ad40a4cba30c","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"b9b71261-aab0-4509-bcd8-25b703eae127","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e4025519-0b3c-49b7-8f5d-29d2c0081de6","type":"FactorRange"}},"id":"dfbefe6b-b69d-4cdf-8cf4-db38c4a2afc8","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bf0b928-a376-4d1f-a120-fa47637db24d","type":"Rect"},{"attributes":{"plot":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"}},"id":"d7995ae1-b510-4eb0-8464-ef923587f6b8","type":"HelpTool"},{"attributes":{"plot":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"}},"id":"f654e036-27f0-45ea-b078-8e35995959f4","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"3749fefb-63d3-4da1-a511-d48cdb14bfc6","type":"BoxAnnotation"},"plot":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"}},"id":"610823c2-7d38-46e9-b422-db9d282020db","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":23},"id":"b94438f2-0b01-4435-8d06-9aca29e11b87","type":"Range1d"},{"attributes":{"color_mapper":{"id":"2f9415c3-41b7-46b8-947b-1129d34a1563","type":"LinearColorMapper"},"formatter":{"id":"17545cf8-5d39-4ef5-888e-b4aae2044ec8","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"1d73d525-e452-4076-bdc5-fecee1e11ad4","subtype":"Chart","type":"Plot"},"ticker":{"id":"2eaf6d25-5636-4a2e-8b24-b9d71572ff44","type":"BasicTicker"}},"id":"313ceea7-8a0b-48ab-912c-f23cb9dba90e","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.999, 10.00111]"],"chart_index":[{"POS_ARR_DELAY":"(9.999, 10.00111]"}],"values":[10.0],"x":[23],"y":["Sunday"]}},"id":"e9c03e7a-008e-4882-b5d0-29490b7c089f","type":"ColumnDataSource"}],"root_ids":["4f47ec5c-ce81-4f7d-ae5f-ab0a76489284"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"9274cf0b-d45b-46bd-a8fb-59a6df88e31d","elementid":"4c9b5201-6350-447b-b91c-1fe2ff2cfb74","modelid":"4f47ec5c-ce81-4f7d-ae5f-ab0a76489284"}];
                  
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