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
      };var element = document.getElementById("be528ff9-8695-4350-9c3e-8cc1bed85a67");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'be528ff9-8695-4350-9c3e-8cc1bed85a67' but no matching script tag was found. ")
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
                  var docs_json = {"60369c68-3d5f-49ae-a58f-eda42fce1fc1":{"roots":{"references":[{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"eccf9b1b-6b18-4fd1-82ce-86af707b4d05","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7f5b2746-d7c2-447e-9dc9-f786f2dd88d7","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Endeavor Air "},"id":"206769ff-31ef-4aee-9c48-683531984e6f","type":"Title"},{"attributes":{"callback":null,"factors":["Tuesday","Wednesday","Monday","Thursday","Friday","Saturday","Sunday"]},"id":"0e563246-4624-474f-a42b-e5b0e98df9eb","type":"FactorRange"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"8d99e2a0-0d0a-445b-930e-dded7122a773","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"},"ticker":{"id":"c85d4d49-fc42-4479-ba8b-e117f6960eea","type":"CategoricalTicker"}},"id":"6e357643-e767-4f6b-8ece-1d116343107a","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"}},"id":"e195ffa8-a50b-4589-b788-1a8be6295f87","type":"SaveTool"},{"attributes":{"data_source":{"id":"dad81a8f-32a1-409b-a99c-885c55d50ee7","type":"ColumnDataSource"},"glyph":{"id":"26e14f77-adaa-435a-9126-1be749aca3d7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7b3d8e7a-f854-4722-b756-c34ac1db7b41","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"}},"id":"abd906e4-048b-46ec-ba16-543cf5b98b72","type":"HelpTool"},{"attributes":{"callback":null,"tabs":[{"id":"e0782e82-29d0-4bf8-a4e5-1608dcf70806","type":"Panel"},{"id":"9667dc75-2fad-49af-bb2e-400be2a780ed","type":"Panel"}]},"id":"47a2b17e-44ef-4746-bd90-de7df43b7f77","type":"Tabs"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"21f2d988-005b-4d19-8f2a-63cbbca9cc98","type":"PanTool"},{"id":"027982e7-6f8b-466e-a59a-19e7f874eacd","type":"WheelZoomTool"},{"id":"e6ca9c42-ae80-415d-8e26-f565b06bc0b5","type":"BoxZoomTool"},{"id":"e195ffa8-a50b-4589-b788-1a8be6295f87","type":"SaveTool"},{"id":"62c9cbef-ac03-45c4-8a2b-d4c3dc258915","type":"ResetTool"},{"id":"f8a69709-09dd-4ebf-9e12-a8edc35b537e","type":"HelpTool"}]},"id":"bc7ee4ab-ba85-495f-9c60-673c6ce2e698","type":"Toolbar"},{"attributes":{},"id":"57e74b21-6b7b-445c-b5ac-31ecc812b77c","type":"BasicTicker"},{"attributes":{},"id":"c85d4d49-fc42-4479-ba8b-e117f6960eea","type":"CategoricalTicker"},{"attributes":{},"id":"8d99e2a0-0d0a-445b-930e-dded7122a773","type":"CategoricalTickFormatter"},{"attributes":{},"id":"fe470139-a3ae-448c-823e-4922d7daea9d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"}},"id":"21f2d988-005b-4d19-8f2a-63cbbca9cc98","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c44d183d-ffaf-4a4a-8848-da6d746a6f95","type":"BoxAnnotation"},{"attributes":{"callback":null,"factors":["Tuesday","Wednesday","Monday","Thursday","Friday","Saturday","Sunday"]},"id":"08bf3007-a5cc-4513-9ac5-25dd448b9aeb","type":"FactorRange"},{"attributes":{"plot":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"}},"id":"3d9cab5b-7ad1-4e54-8fa1-f020b7403f07","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(0.67, 0.75]"],"chart_index":[{"POS_ARR_DELAY":"(0.67, 0.75]"}],"values":[0.75],"x":[17],"y":["Tuesday"]}},"id":"dad81a8f-32a1-409b-a99c-885c55d50ee7","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"b3a52af9-1d4e-4acb-a9fd-c22506949ff2","type":"LinearColorMapper"},"formatter":{"id":"6f070b30-8d54-497b-80cf-486f9d8da86f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"},"ticker":{"id":"bc302c1d-0f94-4cbe-8c8e-6508476fb439","type":"BasicTicker"}},"id":"d70a9e78-7d53-4341-b6d1-d4b197ca5f97","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"85a41a66-a477-4f34-ac20-66e2a446f609","type":"Rect"},{"attributes":{},"id":"ad0ea237-fed5-4388-9917-a43d19e77292","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(0.67, 0.75]"],"chart_index":[{"POS_ARR_DELAY":"(0.67, 0.75]"}],"values":[0.75],"x":[17],"y":["Tuesday"]}},"id":"2f58a3a7-2cf6-45a8-895d-534a7dc6fbd3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.00075, 0.083]","[-0.00075, 0.083]"],"chart_index":[{"POS_ARR_DELAY":"[-0.00075, 0.083]"},{"POS_ARR_DELAY":"[-0.00075, 0.083]"}],"values":[0.0,0.0],"x":[8,18],"y":["Tuesday","Wednesday"]}},"id":"dd12ecef-14f6-45e9-99b6-1660111160bd","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"e2e438d3-faf9-4e35-a015-e7aa30ca6a30","type":"Range1d"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"06467473-3b22-46a3-8844-7b3475c24e7c","type":"LinearAxis"}],"left":[{"id":"6e357643-e767-4f6b-8ece-1d116343107a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"7f5b2746-d7c2-447e-9dc9-f786f2dd88d7","type":"BoxAnnotation"},{"id":"7b3d8e7a-f854-4722-b756-c34ac1db7b41","type":"GlyphRenderer"},{"id":"e6dacdb7-2ef1-4707-9bc2-7765bc391d5b","type":"GlyphRenderer"},{"id":"06467473-3b22-46a3-8844-7b3475c24e7c","type":"LinearAxis"},{"id":"6e357643-e767-4f6b-8ece-1d116343107a","type":"CategoricalAxis"},{"id":"d70a9e78-7d53-4341-b6d1-d4b197ca5f97","type":"ColorBar"}],"right":[{"id":"d70a9e78-7d53-4341-b6d1-d4b197ca5f97","type":"ColorBar"}],"title":{"id":"206769ff-31ef-4aee-9c48-683531984e6f","type":"Title"},"tool_events":{"id":"46f51a54-fac1-4201-91f2-13d95fcb7b25","type":"ToolEvents"},"toolbar":{"id":"bc7ee4ab-ba85-495f-9c60-673c6ce2e698","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"8d6f229a-410a-4d91-97d4-cca54d032f98","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0e563246-4624-474f-a42b-e5b0e98df9eb","type":"FactorRange"}},"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"6f070b30-8d54-497b-80cf-486f9d8da86f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.00075, 0.083]","[-0.00075, 0.083]"],"chart_index":[{"POS_ARR_DELAY":"[-0.00075, 0.083]"},{"POS_ARR_DELAY":"[-0.00075, 0.083]"}],"values":[0.0,0.0],"x":[8,18],"y":["Tuesday","Wednesday"]}},"id":"fcd8420f-d92e-4522-9076-a34fd67ef3a7","type":"ColumnDataSource"},{"attributes":{"child":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"e0782e82-29d0-4bf8-a4e5-1608dcf70806","type":"Panel"},{"attributes":{"plot":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"}},"id":"48906ecb-d0ae-4723-9983-8fe689aee8e0","type":"PanTool"},{"attributes":{},"id":"bc302c1d-0f94-4cbe-8c8e-6508476fb439","type":"BasicTicker"},{"attributes":{"data_source":{"id":"dd12ecef-14f6-45e9-99b6-1660111160bd","type":"ColumnDataSource"},"glyph":{"id":"15651a86-8c9d-43b7-9d31-cb71544efa6d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e6dacdb7-2ef1-4707-9bc2-7765bc391d5b","type":"GlyphRenderer"},{"attributes":{},"id":"46f51a54-fac1-4201-91f2-13d95fcb7b25","type":"ToolEvents"},{"attributes":{"plot":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"}},"id":"62c9cbef-ac03-45c4-8a2b-d4c3dc258915","type":"ResetTool"},{"attributes":{},"id":"c6b3b8e7-3cd9-4f42-b947-11007ed06cc6","type":"BasicTicker"},{"attributes":{},"id":"9a4ef874-0469-42ef-9028-0e947c288bfa","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3578d49-d8e4-428a-af9a-68d8c405cc81","type":"Rect"},{"attributes":{"plot":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"}},"id":"f8a69709-09dd-4ebf-9e12-a8edc35b537e","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"c6f2ad85-474b-4c45-b081-b651da7ff0ca","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"15651a86-8c9d-43b7-9d31-cb71544efa6d","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b3a52af9-1d4e-4acb-a9fd-c22506949ff2","type":"LinearColorMapper"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"fcd4a77b-4108-4017-aa3d-260b25fbf5ff","type":"BasicTickFormatter"},"plot":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"},"ticker":{"id":"57e74b21-6b7b-445c-b5ac-31ecc812b77c","type":"BasicTicker"}},"id":"300a6f4f-1376-45d4-af5d-31acff861d4a","type":"LinearAxis"},{"attributes":{"data_source":{"id":"fcd8420f-d92e-4522-9076-a34fd67ef3a7","type":"ColumnDataSource"},"glyph":{"id":"a3578d49-d8e4-428a-af9a-68d8c405cc81","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ed87410f-1bb2-49b5-b516-6ddfd16061fc","type":"GlyphRenderer"},{"attributes":{},"id":"fcd4a77b-4108-4017-aa3d-260b25fbf5ff","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"}},"id":"045d3b13-1753-4b70-8ea2-a81f5abea313","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"}},"id":"eb087e75-69c4-4358-b63f-e1e445f9bad0","type":"ResetTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"300a6f4f-1376-45d4-af5d-31acff861d4a","type":"LinearAxis"}],"left":[{"id":"8f290590-7526-40cc-85ad-422cfe54c57d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"c44d183d-ffaf-4a4a-8848-da6d746a6f95","type":"BoxAnnotation"},{"id":"fbe094b0-4628-4c3f-94c1-c4bf079b487e","type":"GlyphRenderer"},{"id":"ed87410f-1bb2-49b5-b516-6ddfd16061fc","type":"GlyphRenderer"},{"id":"300a6f4f-1376-45d4-af5d-31acff861d4a","type":"LinearAxis"},{"id":"8f290590-7526-40cc-85ad-422cfe54c57d","type":"CategoricalAxis"},{"id":"8b6bfb7e-a450-4e06-a072-4666ecb1b5d5","type":"ColorBar"}],"right":[{"id":"8b6bfb7e-a450-4e06-a072-4666ecb1b5d5","type":"ColorBar"}],"title":{"id":"eccf9b1b-6b18-4fd1-82ce-86af707b4d05","type":"Title"},"tool_events":{"id":"9a4ef874-0469-42ef-9028-0e947c288bfa","type":"ToolEvents"},"toolbar":{"id":"2600267c-2ae2-4be9-b7ef-735602ea771e","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"e2e438d3-faf9-4e35-a015-e7aa30ca6a30","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"08bf3007-a5cc-4513-9ac5-25dd448b9aeb","type":"FactorRange"}},"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"},{"attributes":{"color_mapper":{"id":"c6f2ad85-474b-4c45-b081-b651da7ff0ca","type":"LinearColorMapper"},"formatter":{"id":"fe470139-a3ae-448c-823e-4922d7daea9d","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"},"ticker":{"id":"e4d13ad7-5e20-4f4a-8431-b569f3f313aa","type":"BasicTicker"}},"id":"8b6bfb7e-a450-4e06-a072-4666ecb1b5d5","type":"ColorBar"},{"attributes":{},"id":"e4d13ad7-5e20-4f4a-8431-b569f3f313aa","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"26e14f77-adaa-435a-9126-1be749aca3d7","type":"Rect"},{"attributes":{"data_source":{"id":"2f58a3a7-2cf6-45a8-895d-534a7dc6fbd3","type":"ColumnDataSource"},"glyph":{"id":"85a41a66-a477-4f34-ac20-66e2a446f609","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fbe094b0-4628-4c3f-94c1-c4bf079b487e","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"595b636a-e31e-4d5c-9c44-03a6f2717bd1","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"},"ticker":{"id":"ad0ea237-fed5-4388-9917-a43d19e77292","type":"CategoricalTicker"}},"id":"8f290590-7526-40cc-85ad-422cfe54c57d","type":"CategoricalAxis"},{"attributes":{},"id":"94143296-6f53-476a-9819-7f5710d77a08","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"48906ecb-d0ae-4723-9983-8fe689aee8e0","type":"PanTool"},{"id":"045d3b13-1753-4b70-8ea2-a81f5abea313","type":"WheelZoomTool"},{"id":"e7c89211-92e4-467e-80ed-8cd6824b266a","type":"BoxZoomTool"},{"id":"3d9cab5b-7ad1-4e54-8fa1-f020b7403f07","type":"SaveTool"},{"id":"eb087e75-69c4-4358-b63f-e1e445f9bad0","type":"ResetTool"},{"id":"abd906e4-048b-46ec-ba16-543cf5b98b72","type":"HelpTool"}]},"id":"2600267c-2ae2-4be9-b7ef-735602ea771e","type":"Toolbar"},{"attributes":{"overlay":{"id":"7f5b2746-d7c2-447e-9dc9-f786f2dd88d7","type":"BoxAnnotation"},"plot":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"}},"id":"e6ca9c42-ae80-415d-8e26-f565b06bc0b5","type":"BoxZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"94143296-6f53-476a-9819-7f5710d77a08","type":"BasicTickFormatter"},"plot":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"},"ticker":{"id":"c6b3b8e7-3cd9-4f42-b947-11007ed06cc6","type":"BasicTicker"}},"id":"06467473-3b22-46a3-8844-7b3475c24e7c","type":"LinearAxis"},{"attributes":{},"id":"595b636a-e31e-4d5c-9c44-03a6f2717bd1","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"8d6f229a-410a-4d91-97d4-cca54d032f98","type":"Range1d"},{"attributes":{"child":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"},"title":"9E"},"id":"9667dc75-2fad-49af-bb2e-400be2a780ed","type":"Panel"},{"attributes":{"plot":{"id":"c7023b58-6a2d-4e2c-971d-efda8ecac097","subtype":"Chart","type":"Plot"}},"id":"027982e7-6f8b-466e-a59a-19e7f874eacd","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"c44d183d-ffaf-4a4a-8848-da6d746a6f95","type":"BoxAnnotation"},"plot":{"id":"22893581-ec79-47ff-a06a-3a6fd90669b1","subtype":"Chart","type":"Plot"}},"id":"e7c89211-92e4-467e-80ed-8cd6824b266a","type":"BoxZoomTool"}],"root_ids":["47a2b17e-44ef-4746-bd90-de7df43b7f77"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"60369c68-3d5f-49ae-a58f-eda42fce1fc1","elementid":"be528ff9-8695-4350-9c3e-8cc1bed85a67","modelid":"47a2b17e-44ef-4746-bd90-de7df43b7f77"}];
                  
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