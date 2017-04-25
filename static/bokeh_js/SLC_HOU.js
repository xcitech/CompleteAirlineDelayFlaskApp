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
      };var element = document.getElementById("60ce0090-0b61-48a9-9e8e-c0f74bf352e5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '60ce0090-0b61-48a9-9e8e-c0f74bf352e5' but no matching script tag was found. ")
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
                  var docs_json = {"9f768b5f-f5b3-47ce-9569-91123e4d3b73":{"roots":{"references":[{"attributes":{"plot":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"}},"id":"acd4b937-e905-4c10-af70-66694cff6ced","type":"ResetTool"},{"attributes":{},"id":"b779f41c-f019-4d6b-8370-21be8940c68a","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"bb28fb38-cc26-4a4f-bdda-5c8d2aa1b190","type":"FactorRange"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"b3a33da5-837c-41d2-a0ee-61843999a695","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(0.2, 0.22]"],"chart_index":[{"POS_ARR_DELAY":"(0.2, 0.22]"}],"values":[0.2222222222222222],"x":[7],"y":["Saturday"]}},"id":"2aad4e8a-82e1-4569-9787-b20984acab65","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.00022, 0.025]"],"chart_index":[{"POS_ARR_DELAY":"[-0.00022, 0.025]"}],"values":[0.0],"x":[8],"y":["Saturday"]}},"id":"6d68de7f-bb9a-4142-9a33-6a0e67d1840c","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"4148eebe-faf4-4d88-9af3-5d7cb701ce1c","type":"LinearAxis"}],"left":[{"id":"4d79253b-daae-4704-929e-69fa8d065ebb","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"490238f2-84d8-4660-98b4-8fee36eff73d","type":"BoxAnnotation"},{"id":"9d152130-6ed4-41e0-ba1a-ef4c108e371a","type":"GlyphRenderer"},{"id":"a5ff5796-6f97-4355-b02d-78736072c4b1","type":"GlyphRenderer"},{"id":"4148eebe-faf4-4d88-9af3-5d7cb701ce1c","type":"LinearAxis"},{"id":"4d79253b-daae-4704-929e-69fa8d065ebb","type":"CategoricalAxis"},{"id":"f36f8e90-e08b-4620-9f17-d3e21d443e9e","type":"ColorBar"}],"right":[{"id":"f36f8e90-e08b-4620-9f17-d3e21d443e9e","type":"ColorBar"}],"title":{"id":"6188decb-7b11-4e46-8dcd-304ba94656aa","type":"Title"},"tool_events":{"id":"a9d261f4-5d61-4cde-bf45-3a87ddcac3d9","type":"ToolEvents"},"toolbar":{"id":"5965a339-aa3e-403b-9a4d-30b745c48a46","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c6291fa8-011a-4256-9af6-2382aedaae90","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b27ac6cd-24e8-4bb9-b474-6ec4badf3e3b","type":"FactorRange"}},"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"103b547e-40e9-449b-bd8d-514e6ccceb13","type":"Rect"},{"attributes":{"plot":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"}},"id":"d1e80728-80cd-46d7-9066-046d3101ae32","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"6d68de7f-bb9a-4142-9a33-6a0e67d1840c","type":"ColumnDataSource"},"glyph":{"id":"103b547e-40e9-449b-bd8d-514e6ccceb13","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a5ff5796-6f97-4355-b02d-78736072c4b1","type":"GlyphRenderer"},{"attributes":{"child":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"9e64b455-4aa8-4ecc-adb2-d5354d5cb60a","type":"Panel"},{"attributes":{"plot":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"}},"id":"f310000f-722e-4928-bc14-853410af2112","type":"PanTool"},{"attributes":{"plot":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"}},"id":"a364f913-ba98-468d-9fa0-6cac6ded5759","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2aad4e8a-82e1-4569-9787-b20984acab65","type":"ColumnDataSource"},"glyph":{"id":"22be450e-3ee5-424d-9b5f-ac82126c2b87","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"76c2d2d0-d6c6-4a8b-833d-ed6361cc1760","type":"GlyphRenderer"},{"attributes":{},"id":"fe5a300f-872c-4179-ab58-a7a03db982e6","type":"CategoricalTickFormatter"},{"attributes":{},"id":"08018cb1-a251-4b6e-a547-66bc071229c0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"}},"id":"f1eaae2e-9fc0-4a9c-b551-bf9a6b0e973c","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"dfb7f01a-bd4b-45a6-b83c-6b9fab18490f","type":"LinearColorMapper"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"fe5a300f-872c-4179-ab58-a7a03db982e6","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"},"ticker":{"id":"e01395f0-b06b-4952-99a6-3f52646f7dd6","type":"CategoricalTicker"}},"id":"4d79253b-daae-4704-929e-69fa8d065ebb","type":"CategoricalAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"91c7741f-0aae-4d56-9710-6f1d5212d793","type":"LinearAxis"}],"left":[{"id":"e61da002-604e-487f-8bd5-85eae8d2d946","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"054d8968-b943-4f73-88a4-7356969a8ba7","type":"BoxAnnotation"},{"id":"76c2d2d0-d6c6-4a8b-833d-ed6361cc1760","type":"GlyphRenderer"},{"id":"017afa55-be19-442b-8183-3ecbfd720623","type":"GlyphRenderer"},{"id":"91c7741f-0aae-4d56-9710-6f1d5212d793","type":"LinearAxis"},{"id":"e61da002-604e-487f-8bd5-85eae8d2d946","type":"CategoricalAxis"},{"id":"4b916031-e65a-4344-833c-9ee391d3ff3c","type":"ColorBar"}],"right":[{"id":"4b916031-e65a-4344-833c-9ee391d3ff3c","type":"ColorBar"}],"title":{"id":"b3a33da5-837c-41d2-a0ee-61843999a695","type":"Title"},"tool_events":{"id":"3f29aed4-5d1c-43fa-b535-fa3ce120d87d","type":"ToolEvents"},"toolbar":{"id":"b9083428-138d-4f4a-9d3f-905be7b7134f","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"f3f4c555-120b-45b8-b9ad-20a1f12ffe33","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"bb28fb38-cc26-4a4f-bdda-5c8d2aa1b190","type":"FactorRange"}},"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"304a7312-107d-467a-8f48-aa3fd5cd1c23","type":"BasicTickFormatter"},"plot":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"},"ticker":{"id":"fc16253d-31f7-4593-b9a2-e144ac0b2095","type":"BasicTicker"}},"id":"4148eebe-faf4-4d88-9af3-5d7cb701ce1c","type":"LinearAxis"},{"attributes":{"overlay":{"id":"490238f2-84d8-4660-98b4-8fee36eff73d","type":"BoxAnnotation"},"plot":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"}},"id":"1e2e1f2e-b94e-41ec-9e45-e3eb513d9241","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"87e82457-bf06-4975-8e77-5c3633c0577a","type":"ColumnDataSource"},"glyph":{"id":"15a3d2d3-48bc-45f8-be06-062d253d2afb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9d152130-6ed4-41e0-ba1a-ef4c108e371a","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"6188decb-7b11-4e46-8dcd-304ba94656aa","type":"Title"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"e4dd332e-2bdf-4241-a6a1-0dc19386f15e","type":"BasicTickFormatter"},"plot":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"},"ticker":{"id":"317cd64b-4f1f-466f-a7ca-7e4a301abe4c","type":"BasicTicker"}},"id":"91c7741f-0aae-4d56-9710-6f1d5212d793","type":"LinearAxis"},{"attributes":{"color_mapper":{"id":"dfb7f01a-bd4b-45a6-b83c-6b9fab18490f","type":"LinearColorMapper"},"formatter":{"id":"26c60e02-e31c-4a3a-8616-199371787453","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"},"ticker":{"id":"17d25893-1e3e-46cb-8b33-fc8ee87953a0","type":"BasicTicker"}},"id":"4b916031-e65a-4344-833c-9ee391d3ff3c","type":"ColorBar"},{"attributes":{},"id":"fc16253d-31f7-4593-b9a2-e144ac0b2095","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"15a3d2d3-48bc-45f8-be06-062d253d2afb","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"f3f4c555-120b-45b8-b9ad-20a1f12ffe33","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"490238f2-84d8-4660-98b4-8fee36eff73d","type":"BoxAnnotation"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"b27ac6cd-24e8-4bb9-b474-6ec4badf3e3b","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.00022, 0.025]"],"chart_index":[{"POS_ARR_DELAY":"[-0.00022, 0.025]"}],"values":[0.0],"x":[8],"y":["Saturday"]}},"id":"74a8adef-e584-49bb-9b9d-ada4a47b284c","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f682c581-ce92-49ff-b25f-88147a9b2e4e","type":"Rect"},{"attributes":{},"id":"26c60e02-e31c-4a3a-8616-199371787453","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"bb46bf81-af73-4fab-98d5-bc4f4b2796a8","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"},"ticker":{"id":"b779f41c-f019-4d6b-8370-21be8940c68a","type":"CategoricalTicker"}},"id":"e61da002-604e-487f-8bd5-85eae8d2d946","type":"CategoricalAxis"},{"attributes":{"callback":null,"tabs":[{"id":"9e64b455-4aa8-4ecc-adb2-d5354d5cb60a","type":"Panel"},{"id":"ee54a9c1-63a1-43bb-84f4-71593bec0f8b","type":"Panel"}]},"id":"4a49860f-4c54-4c3f-9f92-8ce3a2b17b9b","type":"Tabs"},{"attributes":{},"id":"e4dd332e-2bdf-4241-a6a1-0dc19386f15e","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"054d8968-b943-4f73-88a4-7356969a8ba7","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"}},"id":"cd8dc1cf-a836-4573-9eb9-1ebc2c6aa844","type":"SaveTool"},{"attributes":{},"id":"17d25893-1e3e-46cb-8b33-fc8ee87953a0","type":"BasicTicker"},{"attributes":{},"id":"304a7312-107d-467a-8f48-aa3fd5cd1c23","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"c6291fa8-011a-4256-9af6-2382aedaae90","type":"Range1d"},{"attributes":{},"id":"bb46bf81-af73-4fab-98d5-bc4f4b2796a8","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"}},"id":"89691217-b7b9-4045-b31c-57610c020668","type":"SaveTool"},{"attributes":{"plot":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"}},"id":"46c1e441-1dff-4c3f-ad7d-79761891c17b","type":"PanTool"},{"attributes":{"data_source":{"id":"74a8adef-e584-49bb-9b9d-ada4a47b284c","type":"ColumnDataSource"},"glyph":{"id":"f682c581-ce92-49ff-b25f-88147a9b2e4e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"017afa55-be19-442b-8183-3ecbfd720623","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f310000f-722e-4928-bc14-853410af2112","type":"PanTool"},{"id":"a364f913-ba98-468d-9fa0-6cac6ded5759","type":"WheelZoomTool"},{"id":"c86af9f3-112e-4303-8328-cff552aa3aee","type":"BoxZoomTool"},{"id":"cd8dc1cf-a836-4573-9eb9-1ebc2c6aa844","type":"SaveTool"},{"id":"3d91ce29-21a0-4e13-b8aa-bc4cccd308aa","type":"ResetTool"},{"id":"213b1bea-42cd-4840-b887-9dbc4a2a71aa","type":"HelpTool"}]},"id":"b9083428-138d-4f4a-9d3f-905be7b7134f","type":"Toolbar"},{"attributes":{},"id":"a9d261f4-5d61-4cde-bf45-3a87ddcac3d9","type":"ToolEvents"},{"attributes":{"child":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"ee54a9c1-63a1-43bb-84f4-71593bec0f8b","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(0.2, 0.22]"],"chart_index":[{"POS_ARR_DELAY":"(0.2, 0.22]"}],"values":[0.2222222222222222],"x":[7],"y":["Saturday"]}},"id":"87e82457-bf06-4975-8e77-5c3633c0577a","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"22be450e-3ee5-424d-9b5f-ac82126c2b87","type":"Rect"},{"attributes":{"plot":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"}},"id":"213b1bea-42cd-4840-b887-9dbc4a2a71aa","type":"HelpTool"},{"attributes":{"color_mapper":{"id":"7c76deb8-4aaf-4aa3-9001-20931b24bc9c","type":"LinearColorMapper"},"formatter":{"id":"08018cb1-a251-4b6e-a547-66bc071229c0","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"f241762e-dfc5-462c-8957-830f4eb56dbe","subtype":"Chart","type":"Plot"},"ticker":{"id":"240b437c-79ac-4135-badc-27942ef5a429","type":"BasicTicker"}},"id":"f36f8e90-e08b-4620-9f17-d3e21d443e9e","type":"ColorBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"46c1e441-1dff-4c3f-ad7d-79761891c17b","type":"PanTool"},{"id":"d1e80728-80cd-46d7-9066-046d3101ae32","type":"WheelZoomTool"},{"id":"1e2e1f2e-b94e-41ec-9e45-e3eb513d9241","type":"BoxZoomTool"},{"id":"89691217-b7b9-4045-b31c-57610c020668","type":"SaveTool"},{"id":"acd4b937-e905-4c10-af70-66694cff6ced","type":"ResetTool"},{"id":"f1eaae2e-9fc0-4a9c-b551-bf9a6b0e973c","type":"HelpTool"}]},"id":"5965a339-aa3e-403b-9a4d-30b745c48a46","type":"Toolbar"},{"attributes":{"plot":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"}},"id":"3d91ce29-21a0-4e13-b8aa-bc4cccd308aa","type":"ResetTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"7c76deb8-4aaf-4aa3-9001-20931b24bc9c","type":"LinearColorMapper"},{"attributes":{},"id":"e01395f0-b06b-4952-99a6-3f52646f7dd6","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"054d8968-b943-4f73-88a4-7356969a8ba7","type":"BoxAnnotation"},"plot":{"id":"6f83e575-3800-439e-9e11-04cbe5524e32","subtype":"Chart","type":"Plot"}},"id":"c86af9f3-112e-4303-8328-cff552aa3aee","type":"BoxZoomTool"},{"attributes":{},"id":"317cd64b-4f1f-466f-a7ca-7e4a301abe4c","type":"BasicTicker"},{"attributes":{},"id":"240b437c-79ac-4135-badc-27942ef5a429","type":"BasicTicker"},{"attributes":{},"id":"3f29aed4-5d1c-43fa-b535-fa3ce120d87d","type":"ToolEvents"}],"root_ids":["4a49860f-4c54-4c3f-9f92-8ce3a2b17b9b"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"9f768b5f-f5b3-47ce-9569-91123e4d3b73","elementid":"60ce0090-0b61-48a9-9e8e-c0f74bf352e5","modelid":"4a49860f-4c54-4c3f-9f92-8ce3a2b17b9b"}];
                  
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