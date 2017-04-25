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
      };var element = document.getElementById("08da9923-35be-40f3-a077-bb3b2a281ed8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08da9923-35be-40f3-a077-bb3b2a281ed8' but no matching script tag was found. ")
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
                  var docs_json = {"342606cc-372b-4780-a6d6-02caaf58a7b6":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.166666666666668],"x":[11],"y":["Monday"]}},"id":"b3439f12-6c4d-4856-91e5-618165ae8067","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"bd8a0d84-0a7d-4e4f-9f50-4500229a86d4","type":"BasicTickFormatter"},"plot":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"},"ticker":{"id":"212e7e4a-7b44-403d-8a08-eab99454fceb","type":"BasicTicker"}},"id":"59b3419e-95d8-4a4f-8f18-ef60424e5956","type":"LinearAxis"},{"attributes":{},"id":"311126e6-13c3-44fa-8333-d3faa8113d49","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0,0.14285714285714285,2.764705882352941,1.2],"x":[11,12,12,7,10,11,14],"y":["Wednesday","Wednesday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"ebca021d-3ae2-463e-8998-b7e85a31a7ae","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"81419592-7d52-48cc-82ea-98d98480b57c","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"},"ticker":{"id":"62ec502c-3617-46a1-b320-830aa8f8175b","type":"CategoricalTicker"}},"id":"09c02231-0ebc-4a53-bcb4-f06fc69a763d","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"}},"id":"eba5f8fa-3dbb-4f4c-a625-3fd4638a1b83","type":"HelpTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"c26148d2-8a8a-4705-a594-4759f1e329e1","type":"Title"},{"attributes":{},"id":"81419592-7d52-48cc-82ea-98d98480b57c","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"}},"id":"37fd44b1-0b00-422e-9b65-03eb1d677716","type":"WheelZoomTool"},{"attributes":{"color_mapper":{"id":"7ed07fd2-171a-4d50-ac6f-143d70937f56","type":"LinearColorMapper"},"formatter":{"id":"62ec55a7-1d75-43a0-ae4a-948a3a299fe2","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"},"ticker":{"id":"311126e6-13c3-44fa-8333-d3faa8113d49","type":"BasicTicker"}},"id":"b6c3f140-7d02-49f7-b8a3-28fd9b3cd31c","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d18e665-0d2a-42e0-b8a5-238e3c2a159a","type":"Rect"},{"attributes":{"plot":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"}},"id":"efe3e4f8-4aa0-4b08-9184-5e0a0631c576","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e0817f5e-740a-43c0-8939-a93d4124cb02","type":"BoxAnnotation"},{"attributes":{},"id":"90866840-12c2-4f23-a313-87faae13a69f","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"efe3e4f8-4aa0-4b08-9184-5e0a0631c576","type":"PanTool"},{"id":"37fd44b1-0b00-422e-9b65-03eb1d677716","type":"WheelZoomTool"},{"id":"4f534a29-8404-4ae9-a8e7-3fcf696e6dcb","type":"BoxZoomTool"},{"id":"21ccb909-7f43-404d-af52-06b3450f53ef","type":"SaveTool"},{"id":"43c02fc8-10e0-4e56-9598-62fea9696fa6","type":"ResetTool"},{"id":"eba5f8fa-3dbb-4f4c-a625-3fd4638a1b83","type":"HelpTool"}]},"id":"007c482f-c3eb-40de-bab9-a68c018d3119","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"66a46cee-1eeb-4e20-8951-d050f00111cb","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"068750ab-7302-44fe-905d-45ddc86dd4c8","type":"Rect"},{"attributes":{"data_source":{"id":"88b361a3-5dd3-4140-8be3-ea216b2ebc59","type":"ColumnDataSource"},"glyph":{"id":"068750ab-7302-44fe-905d-45ddc86dd4c8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2f386008-338f-446d-b0a4-8108972b2079","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"59b3419e-95d8-4a4f-8f18-ef60424e5956","type":"LinearAxis"}],"left":[{"id":"09c02231-0ebc-4a53-bcb4-f06fc69a763d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"e0817f5e-740a-43c0-8939-a93d4124cb02","type":"BoxAnnotation"},{"id":"2f386008-338f-446d-b0a4-8108972b2079","type":"GlyphRenderer"},{"id":"3aab05a2-22b3-42af-b826-0414b1c281de","type":"GlyphRenderer"},{"id":"4cebc6a1-99d5-4d3c-93da-21f9d84ba48b","type":"GlyphRenderer"},{"id":"59b3419e-95d8-4a4f-8f18-ef60424e5956","type":"LinearAxis"},{"id":"09c02231-0ebc-4a53-bcb4-f06fc69a763d","type":"CategoricalAxis"},{"id":"b6c3f140-7d02-49f7-b8a3-28fd9b3cd31c","type":"ColorBar"}],"right":[{"id":"b6c3f140-7d02-49f7-b8a3-28fd9b3cd31c","type":"ColorBar"}],"title":{"id":"c26148d2-8a8a-4705-a594-4759f1e329e1","type":"Title"},"tool_events":{"id":"90866840-12c2-4f23-a313-87faae13a69f","type":"ToolEvents"},"toolbar":{"id":"007c482f-c3eb-40de-bab9-a68c018d3119","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"66a46cee-1eeb-4e20-8951-d050f00111cb","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"8d2d4f02-175d-4038-945c-7c0380025efe","type":"FactorRange"}},"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"b3439f12-6c4d-4856-91e5-618165ae8067","type":"ColumnDataSource"},"glyph":{"id":"5d18e665-0d2a-42e0-b8a5-238e3c2a159a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3aab05a2-22b3-42af-b826-0414b1c281de","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"7ed07fd2-171a-4d50-ac6f-143d70937f56","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"}},"id":"43c02fc8-10e0-4e56-9598-62fea9696fa6","type":"ResetTool"},{"attributes":{},"id":"62ec55a7-1d75-43a0-ae4a-948a3a299fe2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ebca021d-3ae2-463e-8998-b7e85a31a7ae","type":"ColumnDataSource"},"glyph":{"id":"b7817736-6ef6-4fa2-b319-f7dbbea2e706","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4cebc6a1-99d5-4d3c-93da-21f9d84ba48b","type":"GlyphRenderer"},{"attributes":{},"id":"212e7e4a-7b44-403d-8a08-eab99454fceb","type":"BasicTicker"},{"attributes":{"callback":null,"tabs":[{"id":"fdae085c-d566-4642-b126-8d4e213e2967","type":"Panel"}]},"id":"4c74340e-c58a-4e58-91b5-15e15a5cdb8b","type":"Tabs"},{"attributes":{},"id":"bd8a0d84-0a7d-4e4f-9f50-4500229a86d4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"}},"id":"21ccb909-7f43-404d-af52-06b3450f53ef","type":"SaveTool"},{"attributes":{"child":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"fdae085c-d566-4642-b126-8d4e213e2967","type":"Panel"},{"attributes":{"overlay":{"id":"e0817f5e-740a-43c0-8939-a93d4124cb02","type":"BoxAnnotation"},"plot":{"id":"85758ca8-b3a1-43bd-9500-d0f5409f3468","subtype":"Chart","type":"Plot"}},"id":"4f534a29-8404-4ae9-a8e7-3fcf696e6dcb","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[29.0,30.0],"x":[11,11],"y":["Thursday","Friday"]}},"id":"88b361a3-5dd3-4140-8be3-ea216b2ebc59","type":"ColumnDataSource"},{"attributes":{},"id":"62ec502c-3617-46a1-b320-830aa8f8175b","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b7817736-6ef6-4fa2-b319-f7dbbea2e706","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Wednesday","Thursday","Friday","Saturday","Sunday","Tuesday"]},"id":"8d2d4f02-175d-4038-945c-7c0380025efe","type":"FactorRange"}],"root_ids":["4c74340e-c58a-4e58-91b5-15e15a5cdb8b"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"342606cc-372b-4780-a6d6-02caaf58a7b6","elementid":"08da9923-35be-40f3-a077-bb3b2a281ed8","modelid":"4c74340e-c58a-4e58-91b5-15e15a5cdb8b"}];
                  
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