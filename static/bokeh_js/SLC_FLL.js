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
      };var element = document.getElementById("42d0c9f6-111d-49e3-b39a-2315446681e2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '42d0c9f6-111d-49e3-b39a-2315446681e2' but no matching script tag was found. ")
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
                  var docs_json = {"b0e635a1-6ac9-42ed-b8a7-230b9d52a8e3":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"beccfb7d-856b-42c3-ae5b-6829955b106c","type":"Rect"},{"attributes":{},"id":"51e4d296-aedf-4715-ab5c-ef8d2e16a99f","type":"BasicTicker"},{"attributes":{},"id":"142a0a07-2863-4836-85a7-88f811f6aed1","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.997, 30.00333]"],"chart_index":[{"POS_ARR_DELAY":"(29.997, 30.00333]"}],"values":[30.0],"x":[23],"y":["Sunday"]}},"id":"b5b26a87-b34e-4953-b073-f71419180ea2","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"b5bec509-7e92-4fbf-ba1c-70174d538c76","type":"Title"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"a82e5cdc-db79-4c51-b6f4-e5e788641bdc","type":"LinearAxis"}],"left":[{"id":"e1230928-293f-41e9-9bf3-1a91afbeeae7","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"52b1a69c-4c34-493d-86c0-1602ded0bd21","type":"BoxAnnotation"},{"id":"5eb321b2-f0f3-4c93-bc3f-7555a233cc14","type":"GlyphRenderer"},{"id":"a82e5cdc-db79-4c51-b6f4-e5e788641bdc","type":"LinearAxis"},{"id":"e1230928-293f-41e9-9bf3-1a91afbeeae7","type":"CategoricalAxis"},{"id":"00d634ff-bd2b-4a63-b3de-78801978e32c","type":"ColorBar"}],"right":[{"id":"00d634ff-bd2b-4a63-b3de-78801978e32c","type":"ColorBar"}],"title":{"id":"478e486e-1f9b-478f-a25e-f99f243ccb83","type":"Title"},"tool_events":{"id":"f83ce847-cd1c-440a-b7b9-fc8f67af1d72","type":"ToolEvents"},"toolbar":{"id":"a75cc5aa-e971-4aa9-bd75-7060c6795052","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7a531eb4-b996-4991-a86b-6721ba68b7fa","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"70388849-a455-4ea6-8ce3-da3339e67174","type":"FactorRange"}},"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"}},"id":"12f02c91-5e6a-4436-956b-f32597144522","type":"SaveTool"},{"attributes":{"child":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"d6a604a7-f65d-4bfd-9ef7-bfe8c46ab072","type":"Panel"},{"attributes":{"plot":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"}},"id":"fc7070ae-c6a3-4164-904b-408fa8fe5aa5","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d9b2dbf-63ea-40d3-b04c-1654fa07e41f","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"2bcf32b9-9700-4e63-bba3-d05a558e72fc","type":"LinearColorMapper"},{"attributes":{},"id":"a796d548-1048-48eb-8112-ca112276f597","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"9792180b-9780-402d-816d-f3bc70fa109d","type":"FactorRange"},{"attributes":{"callback":null,"end":23},"id":"9667cf65-e658-4f45-a69b-16bfdb670cad","type":"Range1d"},{"attributes":{"color_mapper":{"id":"2bcf32b9-9700-4e63-bba3-d05a558e72fc","type":"LinearColorMapper"},"formatter":{"id":"8a839778-28f9-4f16-bcfd-bb63f0f3f243","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"},"ticker":{"id":"51e4d296-aedf-4715-ab5c-ef8d2e16a99f","type":"BasicTicker"}},"id":"00d634ff-bd2b-4a63-b3de-78801978e32c","type":"ColorBar"},{"attributes":{},"id":"037860b5-e5b2-4476-bcbb-58a1b7204227","type":"BasicTicker"},{"attributes":{"plot":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"}},"id":"7b351c0c-7e42-4bef-b991-b9092cbd8b80","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"}},"id":"a668d0de-be48-4bfb-ad7b-4c89a234adb9","type":"SaveTool"},{"attributes":{"child":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"ffec4818-4fec-41b8-ba55-c0c97b02f697","type":"Panel"},{"attributes":{"plot":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"}},"id":"8449368b-5f43-4b21-b3e6-bdd5afc686c1","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c055f2f0-0ecd-43d8-b912-1667eb490762","type":"PanTool"},{"id":"7b351c0c-7e42-4bef-b991-b9092cbd8b80","type":"WheelZoomTool"},{"id":"b7270ba3-0613-4176-94f2-a93d2414a599","type":"BoxZoomTool"},{"id":"12f02c91-5e6a-4436-956b-f32597144522","type":"SaveTool"},{"id":"fc7070ae-c6a3-4164-904b-408fa8fe5aa5","type":"ResetTool"},{"id":"8449368b-5f43-4b21-b3e6-bdd5afc686c1","type":"HelpTool"}]},"id":"b7fa8e13-9b11-454c-8c3d-cac0b3cfbfd2","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eb21f918-f81f-49ee-bdd7-07ee1745de53","type":"PanTool"},{"id":"9ce9eee0-82ce-4c56-921b-02c17c219fd6","type":"WheelZoomTool"},{"id":"708709bb-0e81-4943-80fc-11ddf89a4783","type":"BoxZoomTool"},{"id":"a668d0de-be48-4bfb-ad7b-4c89a234adb9","type":"SaveTool"},{"id":"9509cad9-edf8-46d3-9c7e-78c837e9cdb1","type":"ResetTool"},{"id":"189c6cc3-c6fd-4524-ac6b-18db2a7812fe","type":"HelpTool"}]},"id":"a75cc5aa-e971-4aa9-bd75-7060c6795052","type":"Toolbar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a796d548-1048-48eb-8112-ca112276f597","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"},"ticker":{"id":"aa2a4165-8537-4f0c-b80f-234e362caf37","type":"CategoricalTicker"}},"id":"e1230928-293f-41e9-9bf3-1a91afbeeae7","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"478e486e-1f9b-478f-a25e-f99f243ccb83","type":"Title"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"b5592546-6b0f-4c5d-ac17-b397d1a9994e","type":"BasicTickFormatter"},"plot":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"},"ticker":{"id":"037860b5-e5b2-4476-bcbb-58a1b7204227","type":"BasicTicker"}},"id":"1b5c6018-54b2-4fcb-b265-9df41ca1d16d","type":"LinearAxis"},{"attributes":{},"id":"97b2457c-171d-4d5b-88a5-5c43b4e80eb1","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.997, 30.00333]"],"chart_index":[{"POS_ARR_DELAY":"(29.997, 30.00333]"}],"values":[30.0],"x":[23],"y":["Sunday"]}},"id":"88ab94ee-fa75-4a9a-a298-3477348f0593","type":"ColumnDataSource"},{"attributes":{},"id":"d64848ec-fef2-4cda-a74d-f959acb46c96","type":"ToolEvents"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"a4f1fec9-a045-4e43-9882-c75a63776b24","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"}},"id":"189c6cc3-c6fd-4524-ac6b-18db2a7812fe","type":"HelpTool"},{"attributes":{},"id":"beca4d95-ff3a-4222-8cfb-09b527319e84","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"88ab94ee-fa75-4a9a-a298-3477348f0593","type":"ColumnDataSource"},"glyph":{"id":"beccfb7d-856b-42c3-ae5b-6829955b106c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6b05ae02-c8c4-4476-acee-a48648d50073","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"52b1a69c-4c34-493d-86c0-1602ded0bd21","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"283c4688-d85f-419f-beb5-8f4e48263d1b","type":"BoxAnnotation"},"plot":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"}},"id":"b7270ba3-0613-4176-94f2-a93d2414a599","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"}},"id":"9ce9eee0-82ce-4c56-921b-02c17c219fd6","type":"WheelZoomTool"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"70388849-a455-4ea6-8ce3-da3339e67174","type":"FactorRange"},{"attributes":{"overlay":{"id":"52b1a69c-4c34-493d-86c0-1602ded0bd21","type":"BoxAnnotation"},"plot":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"}},"id":"708709bb-0e81-4943-80fc-11ddf89a4783","type":"BoxZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"ffec4818-4fec-41b8-ba55-c0c97b02f697","type":"Panel"},{"id":"d6a604a7-f65d-4bfd-9ef7-bfe8c46ab072","type":"Panel"}]},"id":"325e7b04-039f-4eeb-a2b9-a66fe8e14762","type":"Tabs"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"db1bedf5-193f-4c15-9c91-0f7f03ca98ef","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"},"ticker":{"id":"86e5d232-4c30-464c-9570-4197eb31e274","type":"CategoricalTicker"}},"id":"06736e14-0abc-4bc7-9974-669ce3915edd","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"}},"id":"9509cad9-edf8-46d3-9c7e-78c837e9cdb1","type":"ResetTool"},{"attributes":{},"id":"04fc8c21-fbea-49df-b289-998c252bd06b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b5b26a87-b34e-4953-b073-f71419180ea2","type":"ColumnDataSource"},"glyph":{"id":"1d9b2dbf-63ea-40d3-b04c-1654fa07e41f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5eb321b2-f0f3-4c93-bc3f-7555a233cc14","type":"GlyphRenderer"},{"attributes":{},"id":"86e5d232-4c30-464c-9570-4197eb31e274","type":"CategoricalTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"142a0a07-2863-4836-85a7-88f811f6aed1","type":"BasicTickFormatter"},"plot":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"},"ticker":{"id":"97b2457c-171d-4d5b-88a5-5c43b4e80eb1","type":"BasicTicker"}},"id":"a82e5cdc-db79-4c51-b6f4-e5e788641bdc","type":"LinearAxis"},{"attributes":{},"id":"f83ce847-cd1c-440a-b7b9-fc8f67af1d72","type":"ToolEvents"},{"attributes":{"callback":null,"end":23},"id":"7a531eb4-b996-4991-a86b-6721ba68b7fa","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"283c4688-d85f-419f-beb5-8f4e48263d1b","type":"BoxAnnotation"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"1b5c6018-54b2-4fcb-b265-9df41ca1d16d","type":"LinearAxis"}],"left":[{"id":"06736e14-0abc-4bc7-9974-669ce3915edd","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"283c4688-d85f-419f-beb5-8f4e48263d1b","type":"BoxAnnotation"},{"id":"6b05ae02-c8c4-4476-acee-a48648d50073","type":"GlyphRenderer"},{"id":"1b5c6018-54b2-4fcb-b265-9df41ca1d16d","type":"LinearAxis"},{"id":"06736e14-0abc-4bc7-9974-669ce3915edd","type":"CategoricalAxis"},{"id":"e0755c4d-e48c-4455-9875-bafe09884dde","type":"ColorBar"}],"right":[{"id":"e0755c4d-e48c-4455-9875-bafe09884dde","type":"ColorBar"}],"title":{"id":"b5bec509-7e92-4fbf-ba1c-70174d538c76","type":"Title"},"tool_events":{"id":"d64848ec-fef2-4cda-a74d-f959acb46c96","type":"ToolEvents"},"toolbar":{"id":"b7fa8e13-9b11-454c-8c3d-cac0b3cfbfd2","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"9667cf65-e658-4f45-a69b-16bfdb670cad","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"9792180b-9780-402d-816d-f3bc70fa109d","type":"FactorRange"}},"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"}},"id":"c055f2f0-0ecd-43d8-b912-1667eb490762","type":"PanTool"},{"attributes":{},"id":"b5592546-6b0f-4c5d-ac17-b397d1a9994e","type":"BasicTickFormatter"},{"attributes":{},"id":"db1bedf5-193f-4c15-9c91-0f7f03ca98ef","type":"CategoricalTickFormatter"},{"attributes":{},"id":"8a839778-28f9-4f16-bcfd-bb63f0f3f243","type":"BasicTickFormatter"},{"attributes":{},"id":"aa2a4165-8537-4f0c-b80f-234e362caf37","type":"CategoricalTicker"},{"attributes":{"color_mapper":{"id":"a4f1fec9-a045-4e43-9882-c75a63776b24","type":"LinearColorMapper"},"formatter":{"id":"beca4d95-ff3a-4222-8cfb-09b527319e84","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"067e48be-033a-4eab-9a29-07fcbdcc2bf3","subtype":"Chart","type":"Plot"},"ticker":{"id":"04fc8c21-fbea-49df-b289-998c252bd06b","type":"BasicTicker"}},"id":"e0755c4d-e48c-4455-9875-bafe09884dde","type":"ColorBar"},{"attributes":{"plot":{"id":"0089798f-caff-48cf-88e6-89e6c84f4713","subtype":"Chart","type":"Plot"}},"id":"eb21f918-f81f-49ee-bdd7-07ee1745de53","type":"PanTool"}],"root_ids":["325e7b04-039f-4eeb-a2b9-a66fe8e14762"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"b0e635a1-6ac9-42ed-b8a7-230b9d52a8e3","elementid":"42d0c9f6-111d-49e3-b39a-2315446681e2","modelid":"325e7b04-039f-4eeb-a2b9-a66fe8e14762"}];
                  
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