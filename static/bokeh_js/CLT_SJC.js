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
      };var element = document.getElementById("82c28bb4-c445-4cca-bea5-dff3c1e06736");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '82c28bb4-c445-4cca-bea5-dff3c1e06736' but no matching script tag was found. ")
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
                  var docs_json = {"12c53cd0-abf3-450f-ac62-e5d42dbd9a0e":{"roots":{"references":[{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e3450297-64ed-4564-88ea-6c56e7455e3a","type":"LinearAxis"}],"left":[{"id":"cee13da2-37c3-45ff-a365-55b133cb9f2a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"a33299e3-9694-4f76-9470-47e5f73cde41","type":"BoxAnnotation"},{"id":"95c9e516-f1f0-4021-81ee-1c54a8cf3405","type":"GlyphRenderer"},{"id":"45c44187-6c2b-4d62-91e0-6ca26b093633","type":"GlyphRenderer"},{"id":"190147e8-777d-42af-9c5e-05bfbecf0dce","type":"GlyphRenderer"},{"id":"75be5edc-089c-4261-976b-c1196c0e95d6","type":"GlyphRenderer"},{"id":"d1bf6429-06eb-4a64-b0f5-3d5fe0f16594","type":"GlyphRenderer"},{"id":"6e465758-114c-4187-bfcb-cb8ebb911701","type":"GlyphRenderer"},{"id":"e3450297-64ed-4564-88ea-6c56e7455e3a","type":"LinearAxis"},{"id":"cee13da2-37c3-45ff-a365-55b133cb9f2a","type":"CategoricalAxis"},{"id":"cfe74cf6-c5b2-432b-8f09-169d0e930843","type":"ColorBar"}],"right":[{"id":"cfe74cf6-c5b2-432b-8f09-169d0e930843","type":"ColorBar"}],"title":{"id":"e538f965-c379-4220-98c2-b74772f7c469","type":"Title"},"tool_events":{"id":"ffea0b2a-f625-4b7d-b107-00eb85a71663","type":"ToolEvents"},"toolbar":{"id":"31849911-8082-41a8-8038-e2f07f14f1ae","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"90405357-5918-4f15-b54d-8c82121d4b47","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"8fb166aa-5e3a-4935-8a91-b08110455577","type":"FactorRange"}},"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0],"x":[9],"y":["Friday"]}},"id":"cf5157a7-aef3-4dcc-b8a1-63dde0a608ce","type":"ColumnDataSource"},{"attributes":{},"id":"a478bdab-264b-4df4-9473-98f1011f8c40","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"a33299e3-9694-4f76-9470-47e5f73cde41","type":"BoxAnnotation"},"plot":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"}},"id":"ba706fdd-53ff-4a6e-8bca-7d0aecbf90cc","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"}},"id":"b3da0ffc-fbcb-4798-b21d-335ba08bb442","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"45e4dd57-c985-4c64-b195-2dba38d7e9e8","type":"PanTool"},{"id":"5f9ea6f7-85ba-47e4-9a69-12596b1b79ea","type":"WheelZoomTool"},{"id":"ba706fdd-53ff-4a6e-8bca-7d0aecbf90cc","type":"BoxZoomTool"},{"id":"65dcbdd9-69d9-4f1b-a074-dbf63b7d1eee","type":"SaveTool"},{"id":"b3da0ffc-fbcb-4798-b21d-335ba08bb442","type":"ResetTool"},{"id":"28cc97ac-5dd1-4c2a-9a74-8a44ad26accb","type":"HelpTool"}]},"id":"31849911-8082-41a8-8038-e2f07f14f1ae","type":"Toolbar"},{"attributes":{},"id":"da6a3f40-75f8-4a3b-a724-881138917f33","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"fb16d9dd-0b4a-4453-9976-181f84928450","type":"ColumnDataSource"},"glyph":{"id":"5235682a-610b-4017-b449-3849378498ed","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"95c9e516-f1f0-4021-81ee-1c54a8cf3405","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,28.272727272727273,30.0],"x":[18,18,19],"y":["Tuesday","Wednesday","Sunday"]}},"id":"fb16d9dd-0b4a-4453-9976-181f84928450","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"}},"id":"5f9ea6f7-85ba-47e4-9a69-12596b1b79ea","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c968f5a-0499-4dbc-9ab8-d91eeed3318c","type":"Rect"},{"attributes":{},"id":"4ae9083c-1d2e-4e7f-9de6-269ce0185067","type":"BasicTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"07ce68dc-6d6e-49e5-8696-d58fc9e53d17","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"},"ticker":{"id":"2e30eb20-9b8d-40df-8c99-7f7bc8d60e48","type":"CategoricalTicker"}},"id":"cee13da2-37c3-45ff-a365-55b133cb9f2a","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e273a5c6-8a4d-4d7a-b16f-de551cd1cb39","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.75,6.0,3.75],"x":[18,18,18],"y":["Thursday","Friday","Saturday"]}},"id":"a62d36ff-d56b-4c4f-b9f2-5984fc724a24","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.909090909090908],"x":[18],"y":["Sunday"]}},"id":"de9864cf-0ef0-4d0d-874d-2108a243110e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1fae4230-aa8b-418b-98fc-b52e49fba2fa","type":"ColumnDataSource"},"glyph":{"id":"51aeee40-1ac5-4135-9780-54d7be361b01","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"75be5edc-089c-4261-976b-c1196c0e95d6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cf5157a7-aef3-4dcc-b8a1-63dde0a608ce","type":"ColumnDataSource"},"glyph":{"id":"e273a5c6-8a4d-4d7a-b16f-de551cd1cb39","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6e465758-114c-4187-bfcb-cb8ebb911701","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"a8b781bf-1b86-4c8d-9cfa-4227ce4c10ff","type":"Panel"}]},"id":"a3b079ea-bf02-41cf-8f62-d65b9e0b5ba1","type":"Tabs"},{"attributes":{},"id":"2e30eb20-9b8d-40df-8c99-7f7bc8d60e48","type":"CategoricalTicker"},{"attributes":{"callback":null,"end":23},"id":"90405357-5918-4f15-b54d-8c82121d4b47","type":"Range1d"},{"attributes":{},"id":"ffea0b2a-f625-4b7d-b107-00eb85a71663","type":"ToolEvents"},{"attributes":{"data_source":{"id":"de9864cf-0ef0-4d0d-874d-2108a243110e","type":"ColumnDataSource"},"glyph":{"id":"0c968f5a-0499-4dbc-9ab8-d91eeed3318c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"190147e8-777d-42af-9c5e-05bfbecf0dce","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"51aeee40-1ac5-4135-9780-54d7be361b01","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5235682a-610b-4017-b449-3849378498ed","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"8fb166aa-5e3a-4935-8a91-b08110455577","type":"FactorRange"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"c44deb76-78bd-4d24-98ea-3a29f17aef10","type":"LinearColorMapper"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"a478bdab-264b-4df4-9473-98f1011f8c40","type":"BasicTickFormatter"},"plot":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"},"ticker":{"id":"4ae9083c-1d2e-4e7f-9de6-269ce0185067","type":"BasicTicker"}},"id":"e3450297-64ed-4564-88ea-6c56e7455e3a","type":"LinearAxis"},{"attributes":{"plot":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"}},"id":"28cc97ac-5dd1-4c2a-9a74-8a44ad26accb","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.0],"x":[12],"y":["Friday"]}},"id":"1fae4230-aa8b-418b-98fc-b52e49fba2fa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a62d36ff-d56b-4c4f-b9f2-5984fc724a24","type":"ColumnDataSource"},"glyph":{"id":"dddc0320-a76b-402b-9f46-dac504f4e98f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d1bf6429-06eb-4a64-b0f5-3d5fe0f16594","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"}},"id":"45e4dd57-c985-4c64-b195-2dba38d7e9e8","type":"PanTool"},{"attributes":{"child":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"a8b781bf-1b86-4c8d-9cfa-4227ce4c10ff","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.454545454545453],"x":[18],"y":["Monday"]}},"id":"d9686750-9fa3-4718-8c6d-3d49a15cda1f","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"e538f965-c379-4220-98c2-b74772f7c469","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a33299e3-9694-4f76-9470-47e5f73cde41","type":"BoxAnnotation"},{"attributes":{"color_mapper":{"id":"c44deb76-78bd-4d24-98ea-3a29f17aef10","type":"LinearColorMapper"},"formatter":{"id":"da6a3f40-75f8-4a3b-a724-881138917f33","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"},"ticker":{"id":"2032d4f6-2786-4c1e-8362-cd9e526b02fb","type":"BasicTicker"}},"id":"cfe74cf6-c5b2-432b-8f09-169d0e930843","type":"ColorBar"},{"attributes":{},"id":"2032d4f6-2786-4c1e-8362-cd9e526b02fb","type":"BasicTicker"},{"attributes":{"plot":{"id":"be498849-037e-43ee-a19f-d2b01e75a44a","subtype":"Chart","type":"Plot"}},"id":"65dcbdd9-69d9-4f1b-a074-dbf63b7d1eee","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dddc0320-a76b-402b-9f46-dac504f4e98f","type":"Rect"},{"attributes":{"data_source":{"id":"d9686750-9fa3-4718-8c6d-3d49a15cda1f","type":"ColumnDataSource"},"glyph":{"id":"81a5bfda-12f2-471a-bb9a-751e66afd454","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"45c44187-6c2b-4d62-91e0-6ca26b093633","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"81a5bfda-12f2-471a-bb9a-751e66afd454","type":"Rect"},{"attributes":{},"id":"07ce68dc-6d6e-49e5-8696-d58fc9e53d17","type":"CategoricalTickFormatter"}],"root_ids":["a3b079ea-bf02-41cf-8f62-d65b9e0b5ba1"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"12c53cd0-abf3-450f-ac62-e5d42dbd9a0e","elementid":"82c28bb4-c445-4cca-bea5-dff3c1e06736","modelid":"a3b079ea-bf02-41cf-8f62-d65b9e0b5ba1"}];
                  
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