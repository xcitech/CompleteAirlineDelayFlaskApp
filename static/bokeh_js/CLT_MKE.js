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
      };var element = document.getElementById("90c757bd-6994-4cd4-bb60-a0c90f7bb42d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '90c757bd-6994-4cd4-bb60-a0c90f7bb42d' but no matching script tag was found. ")
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
                  var docs_json = {"ccd0db2b-65d7-477d-84c3-b34dabeacf0a":{"roots":{"references":[{"attributes":{},"id":"2b177e23-d440-4246-8989-6dfce6c57866","type":"CategoricalTicker"},{"attributes":{},"id":"70c9b1e4-9f20-4e81-84b0-7c96defb0aa0","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(19.2, 22.4]"],"chart_index":[{"POS_ARR_DELAY":"(19.2, 22.4]"}],"values":[21.083333333333332],"x":[14],"y":["Monday"]}},"id":"a1b883d5-1970-4488-b107-3d5984706ca0","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"aeee7555-76d2-43af-8282-c20e29e3c618","type":"Rect"},{"attributes":{"data_source":{"id":"a1b883d5-1970-4488-b107-3d5984706ca0","type":"ColumnDataSource"},"glyph":{"id":"fbd4158b-b38e-40d2-bcc4-0f96f8a0bedd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8e8d98b9-5a76-4520-9e23-36a97982def8","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"614c46dd-2f89-44e1-a422-772525520b1e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.03, 19.2]"],"chart_index":[{"POS_ARR_DELAY":"(16.03, 19.2]"}],"values":[18.90909090909091],"x":[14],"y":["Sunday"]}},"id":"ebd97ad0-f6c5-4528-82fb-c321687c0267","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4fa2db62-980d-476d-8a17-75afe6165496","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"32b2d22c-ac1f-47c9-ad61-4ceb30eacf4e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.2, 6.4]"],"chart_index":[{"POS_ARR_DELAY":"(3.2, 6.4]"}],"values":[6.166666666666667],"x":[14],"y":["Friday"]}},"id":"c8b78558-0782-4a8d-acdd-7fa32b3a3da1","type":"ColumnDataSource"},{"attributes":{},"id":"f53b2042-8b60-4d2e-998c-70668a8db211","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"70c9b1e4-9f20-4e81-84b0-7c96defb0aa0","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"},"ticker":{"id":"2b177e23-d440-4246-8989-6dfce6c57866","type":"CategoricalTicker"}},"id":"ba3ff4d1-50a1-4cd0-be4b-6dd52da0d750","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":23},"id":"7b193281-585a-43c1-8a99-74fa880d31e4","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8dc299c-3f9b-479b-9c92-93c0694ad95c","type":"PanTool"},{"id":"30419b61-3ead-4bcf-a932-8f225c9ab316","type":"WheelZoomTool"},{"id":"6e564af2-fe5b-465c-90c8-fdf705819d6f","type":"BoxZoomTool"},{"id":"9f23d769-aaaa-455a-acf3-a60514146fae","type":"SaveTool"},{"id":"8dfdab54-da01-4bf8-bf1b-97e81543a386","type":"ResetTool"},{"id":"9c25a356-761b-4861-b2d6-e73aad62b636","type":"HelpTool"}]},"id":"acf2780c-9342-4ce2-b886-063c8acccd5f","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(25.6, 28.8]","(25.6, 28.8]"],"chart_index":[{"POS_ARR_DELAY":"(25.6, 28.8]"},{"POS_ARR_DELAY":"(25.6, 28.8]"}],"values":[28.153846153846153,28.846153846153847],"x":[14,14],"y":["Tuesday","Saturday"]}},"id":"6ee9615f-38b5-4c03-8798-b64e670496ad","type":"ColumnDataSource"},{"attributes":{"child":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"45b61551-aff9-4421-8212-14655cce5fcd","type":"Panel"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"801809f1-46b0-4598-b218-efa18ba32de9","type":"Title"},{"attributes":{"data_source":{"id":"54741690-d0f4-4efe-b11c-dd3987403d5c","type":"ColumnDataSource"},"glyph":{"id":"d3afae8c-9710-4e11-a35f-a5c35c22a6dc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"52a3743e-c411-469b-8539-5471bc998085","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"4b6ddbac-cbde-4627-a593-53e2999d2192","type":"BasicTickFormatter"},"plot":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"},"ticker":{"id":"fd922f6f-938d-4bb4-a617-337ea68253c4","type":"BasicTicker"}},"id":"29739ecd-4236-4be0-8d85-0192c710d383","type":"LinearAxis"},{"attributes":{},"id":"270cef8b-3ca2-465c-ac41-5b8dba24abd8","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3afae8c-9710-4e11-a35f-a5c35c22a6dc","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12.8, 16.03]"],"chart_index":[{"POS_ARR_DELAY":"(12.8, 16.03]"}],"values":[14.666666666666666],"x":[14],"y":["Wednesday"]}},"id":"69195ef7-a439-476a-9a97-56de38363aec","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"}},"id":"30419b61-3ead-4bcf-a932-8f225c9ab316","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"}},"id":"9f23d769-aaaa-455a-acf3-a60514146fae","type":"SaveTool"},{"attributes":{"callback":null,"tabs":[{"id":"45b61551-aff9-4421-8212-14655cce5fcd","type":"Panel"}]},"id":"cf6eaf00-c05e-45fc-8e9b-a881d2859363","type":"Tabs"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"2e06b0b2-ed85-46fa-a5e2-1ec859a0abc6","type":"FactorRange"},{"attributes":{"plot":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"}},"id":"8dfdab54-da01-4bf8-bf1b-97e81543a386","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e71a9dec-c096-4550-975b-400e6a2cdd79","type":"Rect"},{"attributes":{"data_source":{"id":"c8b78558-0782-4a8d-acdd-7fa32b3a3da1","type":"ColumnDataSource"},"glyph":{"id":"e71a9dec-c096-4550-975b-400e6a2cdd79","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"32b58e5f-69a4-470b-bbc7-56bb24fb50ed","type":"GlyphRenderer"},{"attributes":{},"id":"4b6ddbac-cbde-4627-a593-53e2999d2192","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"69195ef7-a439-476a-9a97-56de38363aec","type":"ColumnDataSource"},"glyph":{"id":"614c46dd-2f89-44e1-a422-772525520b1e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b17b25d6-7fd9-48d1-9d09-b1c295eb0624","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ebd97ad0-f6c5-4528-82fb-c321687c0267","type":"ColumnDataSource"},"glyph":{"id":"32b2d22c-ac1f-47c9-ad61-4ceb30eacf4e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fd086240-7a75-46d9-8c44-a544d587924f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6ee9615f-38b5-4c03-8798-b64e670496ad","type":"ColumnDataSource"},"glyph":{"id":"aeee7555-76d2-43af-8282-c20e29e3c618","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c285b628-8831-4061-ad8a-b9372bdff2e0","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fbd4158b-b38e-40d2-bcc4-0f96f8a0bedd","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.4, 9.6]"],"chart_index":[{"POS_ARR_DELAY":"(6.4, 9.6]"}],"values":[9.181818181818182],"x":[14],"y":["Thursday"]}},"id":"54741690-d0f4-4efe-b11c-dd3987403d5c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"67eaa1ac-96e3-4270-8d37-0ace347ff838","type":"ColumnDataSource"},"glyph":{"id":"4fa2db62-980d-476d-8a17-75afe6165496","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b222d60e-94df-4ede-9b67-57e8efa7a818","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.2]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.2]"}],"values":[0.0],"x":[20],"y":["Saturday"]}},"id":"67eaa1ac-96e3-4270-8d37-0ace347ff838","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"}},"id":"b8dc299c-3f9b-479b-9c92-93c0694ad95c","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"29739ecd-4236-4be0-8d85-0192c710d383","type":"LinearAxis"}],"left":[{"id":"ba3ff4d1-50a1-4cd0-be4b-6dd52da0d750","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"56a8bee2-f9ed-443d-8f08-ba148e4f022f","type":"BoxAnnotation"},{"id":"c285b628-8831-4061-ad8a-b9372bdff2e0","type":"GlyphRenderer"},{"id":"8e8d98b9-5a76-4520-9e23-36a97982def8","type":"GlyphRenderer"},{"id":"fd086240-7a75-46d9-8c44-a544d587924f","type":"GlyphRenderer"},{"id":"b17b25d6-7fd9-48d1-9d09-b1c295eb0624","type":"GlyphRenderer"},{"id":"52a3743e-c411-469b-8539-5471bc998085","type":"GlyphRenderer"},{"id":"32b58e5f-69a4-470b-bbc7-56bb24fb50ed","type":"GlyphRenderer"},{"id":"b222d60e-94df-4ede-9b67-57e8efa7a818","type":"GlyphRenderer"},{"id":"29739ecd-4236-4be0-8d85-0192c710d383","type":"LinearAxis"},{"id":"ba3ff4d1-50a1-4cd0-be4b-6dd52da0d750","type":"CategoricalAxis"},{"id":"8480994d-9acd-4f38-8ded-003bd508f32a","type":"ColorBar"}],"right":[{"id":"8480994d-9acd-4f38-8ded-003bd508f32a","type":"ColorBar"}],"title":{"id":"801809f1-46b0-4598-b218-efa18ba32de9","type":"Title"},"tool_events":{"id":"f57f6b70-fb78-4cbd-bc5b-4678db4f5452","type":"ToolEvents"},"toolbar":{"id":"acf2780c-9342-4ce2-b886-063c8acccd5f","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7b193281-585a-43c1-8a99-74fa880d31e4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"2e06b0b2-ed85-46fa-a5e2-1ec859a0abc6","type":"FactorRange"}},"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"}},"id":"9c25a356-761b-4861-b2d6-e73aad62b636","type":"HelpTool"},{"attributes":{"overlay":{"id":"56a8bee2-f9ed-443d-8f08-ba148e4f022f","type":"BoxAnnotation"},"plot":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"}},"id":"6e564af2-fe5b-465c-90c8-fdf705819d6f","type":"BoxZoomTool"},{"attributes":{"color_mapper":{"id":"28e6f82d-a362-47a2-a0ea-0f5e77ea11f3","type":"LinearColorMapper"},"formatter":{"id":"f53b2042-8b60-4d2e-998c-70668a8db211","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"4fe0c1ed-fd4f-4f4e-80e3-4905b127ce17","subtype":"Chart","type":"Plot"},"ticker":{"id":"270cef8b-3ca2-465c-ac41-5b8dba24abd8","type":"BasicTicker"}},"id":"8480994d-9acd-4f38-8ded-003bd508f32a","type":"ColorBar"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"28e6f82d-a362-47a2-a0ea-0f5e77ea11f3","type":"LinearColorMapper"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56a8bee2-f9ed-443d-8f08-ba148e4f022f","type":"BoxAnnotation"},{"attributes":{},"id":"fd922f6f-938d-4bb4-a617-337ea68253c4","type":"BasicTicker"},{"attributes":{},"id":"f57f6b70-fb78-4cbd-bc5b-4678db4f5452","type":"ToolEvents"}],"root_ids":["cf6eaf00-c05e-45fc-8e9b-a881d2859363"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"ccd0db2b-65d7-477d-84c3-b34dabeacf0a","elementid":"90c757bd-6994-4cd4-bb60-a0c90f7bb42d","modelid":"cf6eaf00-c05e-45fc-8e9b-a881d2859363"}];
                  
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