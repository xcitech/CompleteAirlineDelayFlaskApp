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
      };var element = document.getElementById("436fd232-4661-4885-8074-93870cbf1f84");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '436fd232-4661-4885-8074-93870cbf1f84' but no matching script tag was found. ")
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
                  var docs_json = {"5793989a-e458-46fe-b499-ebd6c0f67a22":{"roots":{"references":[{"attributes":{},"id":"d6cf9784-c9a2-4be6-9cf9-b0b72388daad","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"242622d6-052a-472a-a168-787f6f35eac1","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.125,9.705882352941176,6.75],"x":[7,11,11],"y":["Tuesday","Saturday","Sunday"]}},"id":"28d80537-746b-47ec-a4dd-722de82b9e0f","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"64ba42d4-f9ae-4729-8cc1-6bcaba40bf58","type":"LinearColorMapper"},"formatter":{"id":"d6cf9784-c9a2-4be6-9cf9-b0b72388daad","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"},"ticker":{"id":"b3f47dcf-0d6b-45e4-9198-08eb6686b0be","type":"BasicTicker"}},"id":"52401592-2e33-4927-bfbd-101ad3c41abb","type":"ColorBar"},{"attributes":{"data_source":{"id":"28d80537-746b-47ec-a4dd-722de82b9e0f","type":"ColumnDataSource"},"glyph":{"id":"0b4ffb8f-817d-4a7d-9479-36e10d774e8d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b5008daa-a51e-4ae9-86d8-34ab2f852f2b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[16.0],"x":[20],"y":["Tuesday"]}},"id":"c3186b66-9f4a-4f2b-ab4f-e0fd1d4f0691","type":"ColumnDataSource"},{"attributes":{},"id":"0c515d76-2ee7-4af1-bf7a-769f1ba93f03","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"3a3dd029-ecf7-44b4-9627-fa5c3e6455eb","type":"ColumnDataSource"},"glyph":{"id":"f900b7bb-6674-433b-9f6a-690c96d1791e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"02ffd55e-970b-41d9-953f-07ded00a460a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.625,17.25],"x":[7,11],"y":["Thursday","Thursday"]}},"id":"0d14801a-a975-4326-9a97-8c318fb259e2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"}},"id":"fa1a2d4a-9310-40b9-b2fc-c6765190c773","type":"HelpTool"},{"attributes":{"data_source":{"id":"fe9114de-ce54-40fd-9af8-3bab75bf61e0","type":"ColumnDataSource"},"glyph":{"id":"eece3815-29ef-4d7b-b03c-6eec74d111bf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"58a8d4ca-e960-4410-a016-02dfe523ccde","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd87d6ad-ccb5-4466-bcf6-75505e912e1c","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"30efc831-3510-446e-bb4f-c37df8be3b26","type":"PanTool"},{"id":"57fff72c-0e06-496e-bbd6-276991d4522f","type":"WheelZoomTool"},{"id":"25252873-0410-4eb6-9882-a2014a1d7d75","type":"BoxZoomTool"},{"id":"0eba3bf2-60b5-49ac-a14c-71696977b490","type":"SaveTool"},{"id":"eb0ee5c9-9a60-4542-b334-448c43b0e416","type":"ResetTool"},{"id":"fa1a2d4a-9310-40b9-b2fc-c6765190c773","type":"HelpTool"}]},"id":"2ae47169-dcbb-4bdd-96c0-f1d38805052c","type":"Toolbar"},{"attributes":{},"id":"c3cf7656-c0da-4627-90f9-18ef1b5cbc1d","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[20],"y":["Thursday"]}},"id":"3a3dd029-ecf7-44b4-9627-fa5c3e6455eb","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f900b7bb-6674-433b-9f6a-690c96d1791e","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"be6bcebb-6ef8-490c-9533-6f8d145131d5","type":"LinearAxis"}],"left":[{"id":"26d7f067-cd78-40cf-a511-f1d19e53899d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"71d6fb40-8ec1-47a3-a833-ccfbf675e90b","type":"BoxAnnotation"},{"id":"02ffd55e-970b-41d9-953f-07ded00a460a","type":"GlyphRenderer"},{"id":"cde90403-0e61-4898-9dca-29e21f621c57","type":"GlyphRenderer"},{"id":"6694d597-1056-46d3-ace4-a1a32703da83","type":"GlyphRenderer"},{"id":"c95041a7-19b7-49bf-97ce-1a80e784bada","type":"GlyphRenderer"},{"id":"b5008daa-a51e-4ae9-86d8-34ab2f852f2b","type":"GlyphRenderer"},{"id":"58a8d4ca-e960-4410-a016-02dfe523ccde","type":"GlyphRenderer"},{"id":"273f82f1-0f6b-4959-a6b9-f60a6f06b565","type":"GlyphRenderer"},{"id":"be6bcebb-6ef8-490c-9533-6f8d145131d5","type":"LinearAxis"},{"id":"26d7f067-cd78-40cf-a511-f1d19e53899d","type":"CategoricalAxis"},{"id":"52401592-2e33-4927-bfbd-101ad3c41abb","type":"ColorBar"}],"right":[{"id":"52401592-2e33-4927-bfbd-101ad3c41abb","type":"ColorBar"}],"title":{"id":"d410d48f-541c-4fed-af6a-cf7045af420a","type":"Title"},"tool_events":{"id":"c3cf7656-c0da-4627-90f9-18ef1b5cbc1d","type":"ToolEvents"},"toolbar":{"id":"2ae47169-dcbb-4bdd-96c0-f1d38805052c","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"3d9f22ff-b127-4588-84aa-396f0a560c2b","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"6cb6651e-79bb-4941-8da2-9f3c2919afcc","type":"FactorRange"}},"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"6cb6651e-79bb-4941-8da2-9f3c2919afcc","type":"FactorRange"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"71d6fb40-8ec1-47a3-a833-ccfbf675e90b","type":"BoxAnnotation"},{"attributes":{},"id":"b3f47dcf-0d6b-45e4-9198-08eb6686b0be","type":"BasicTicker"},{"attributes":{},"id":"15f562f1-8ad0-4f0d-9a51-cd795fb62b68","type":"BasicTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"64ba42d4-f9ae-4729-8cc1-6bcaba40bf58","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"15b735dc-d86f-4afd-a953-01e122606442","type":"Rect"},{"attributes":{},"id":"73634adb-76be-468d-a58c-216bb17626a6","type":"CategoricalTicker"},{"attributes":{"callback":null,"end":23},"id":"3d9f22ff-b127-4588-84aa-396f0a560c2b","type":"Range1d"},{"attributes":{"overlay":{"id":"71d6fb40-8ec1-47a3-a833-ccfbf675e90b","type":"BoxAnnotation"},"plot":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"}},"id":"25252873-0410-4eb6-9882-a2014a1d7d75","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"0d14801a-a975-4326-9a97-8c318fb259e2","type":"ColumnDataSource"},"glyph":{"id":"15b735dc-d86f-4afd-a953-01e122606442","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cde90403-0e61-4898-9dca-29e21f621c57","type":"GlyphRenderer"},{"attributes":{},"id":"a360ee9a-6657-447a-a983-55e952f44569","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.5625,4.133333333333334],"x":[11,7],"y":["Monday","Wednesday"]}},"id":"fe9114de-ce54-40fd-9af8-3bab75bf61e0","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b4ffb8f-817d-4a7d-9479-36e10d774e8d","type":"Rect"},{"attributes":{"plot":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"}},"id":"57fff72c-0e06-496e-bbd6-276991d4522f","type":"WheelZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"a360ee9a-6657-447a-a983-55e952f44569","type":"BasicTickFormatter"},"plot":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"},"ticker":{"id":"15f562f1-8ad0-4f0d-9a51-cd795fb62b68","type":"BasicTicker"}},"id":"be6bcebb-6ef8-490c-9533-6f8d145131d5","type":"LinearAxis"},{"attributes":{"data_source":{"id":"68ce7105-b503-4aff-8918-fc775e123876","type":"ColumnDataSource"},"glyph":{"id":"242622d6-052a-472a-a168-787f6f35eac1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"273f82f1-0f6b-4959-a6b9-f60a6f06b565","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"}},"id":"eb0ee5c9-9a60-4542-b334-448c43b0e416","type":"ResetTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"d410d48f-541c-4fed-af6a-cf7045af420a","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.8125,10.823529411764707,11.76923076923077],"x":[11,11,20],"y":["Tuesday","Friday","Sunday"]}},"id":"d6382294-02fa-4ab7-aae3-afc0bb0be831","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8115a8b8-bec4-49d9-b700-82bf7f2766dd","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,1.8125,2.5625,0.0,0.5333333333333333,2.7777777777777777,0.0],"x":[6,7,11,6,7,5,7],"y":["Monday","Monday","Wednesday","Friday","Friday","Saturday","Saturday"]}},"id":"68ce7105-b503-4aff-8918-fc775e123876","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d6382294-02fa-4ab7-aae3-afc0bb0be831","type":"ColumnDataSource"},"glyph":{"id":"cd87d6ad-ccb5-4466-bcf6-75505e912e1c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c95041a7-19b7-49bf-97ce-1a80e784bada","type":"GlyphRenderer"},{"attributes":{"child":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"91e38c83-376c-4e90-a02d-99d228204bb2","type":"Panel"},{"attributes":{"data_source":{"id":"c3186b66-9f4a-4f2b-ab4f-e0fd1d4f0691","type":"ColumnDataSource"},"glyph":{"id":"8115a8b8-bec4-49d9-b700-82bf7f2766dd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6694d597-1056-46d3-ace4-a1a32703da83","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"0c515d76-2ee7-4af1-bf7a-769f1ba93f03","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"},"ticker":{"id":"73634adb-76be-468d-a58c-216bb17626a6","type":"CategoricalTicker"}},"id":"26d7f067-cd78-40cf-a511-f1d19e53899d","type":"CategoricalAxis"},{"attributes":{"callback":null,"tabs":[{"id":"91e38c83-376c-4e90-a02d-99d228204bb2","type":"Panel"}]},"id":"89ddb72c-9038-4718-aca1-428e4c8a4890","type":"Tabs"},{"attributes":{"plot":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"}},"id":"0eba3bf2-60b5-49ac-a14c-71696977b490","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eece3815-29ef-4d7b-b03c-6eec74d111bf","type":"Rect"},{"attributes":{"plot":{"id":"8010686c-50d4-4c8a-b305-036041ef9275","subtype":"Chart","type":"Plot"}},"id":"30efc831-3510-446e-bb4f-c37df8be3b26","type":"PanTool"}],"root_ids":["89ddb72c-9038-4718-aca1-428e4c8a4890"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"5793989a-e458-46fe-b499-ebd6c0f67a22","elementid":"436fd232-4661-4885-8074-93870cbf1f84","modelid":"89ddb72c-9038-4718-aca1-428e4c8a4890"}];
                  
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