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
      };var element = document.getElementById("398e6615-f7aa-4e9b-a62b-92282cf9c27e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '398e6615-f7aa-4e9b-a62b-92282cf9c27e' but no matching script tag was found. ")
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
                  var docs_json = {"c6734ac7-7969-45c2-ac13-e063ae23a644":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eeee788c-9840-44eb-be75-2fdcbfef05dd","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"3ba98527-1ac5-4a49-a6db-c4aa038d5d19","type":"FactorRange"},{"attributes":{"plot":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"}},"id":"6cdefa9d-d43d-4802-853e-c4b9d874404a","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[4.07, 6.8]"],"chart_index":[{"POS_ARR_DELAY":"[4.07, 6.8]"}],"values":[4.090909090909091],"x":[19],"y":["Tuesday"]}},"id":"c8bb0f2f-6618-4a67-b8c2-4630663f42c5","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"}},"id":"4a92526f-9a4a-4e8b-a304-b2ed1b19934a","type":"PanTool"},{"attributes":{"plot":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"}},"id":"a1d614c9-8eb2-4492-8cdc-b56d0cb5ee71","type":"ResetTool"},{"attributes":{"child":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"f2826bdf-9d47-4baa-889c-6c219f744779","type":"Panel"},{"attributes":{"data_source":{"id":"cce7a75e-2f2b-4fcc-bfa8-56776350cd27","type":"ColumnDataSource"},"glyph":{"id":"5e3861f8-3659-4b38-89bf-3484135148fd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c8d45c09-2451-4d13-b40f-6d5484d9d863","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"b71c1fe0-1b07-4bfa-906b-8669eaafc2ad","type":"LinearAxis"}],"left":[{"id":"6f548cf5-ba4d-4a17-bfe6-b668d6f3dc95","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"72013e77-7d33-4490-bc2c-8a3898a9cd07","type":"BoxAnnotation"},{"id":"c8d45c09-2451-4d13-b40f-6d5484d9d863","type":"GlyphRenderer"},{"id":"7aac9ad4-b459-496a-b616-7add0c409b16","type":"GlyphRenderer"},{"id":"e7ef9e9a-2aac-411e-ac28-d89dd2a5f088","type":"GlyphRenderer"},{"id":"0e8b422b-20b9-4334-a68f-5cf118f8cb78","type":"GlyphRenderer"},{"id":"e754e648-56fd-4765-9c70-6017927daaa4","type":"GlyphRenderer"},{"id":"b71c1fe0-1b07-4bfa-906b-8669eaafc2ad","type":"LinearAxis"},{"id":"6f548cf5-ba4d-4a17-bfe6-b668d6f3dc95","type":"CategoricalAxis"},{"id":"ea5859c9-c53e-445d-9bac-227ebd04236f","type":"ColorBar"}],"right":[{"id":"ea5859c9-c53e-445d-9bac-227ebd04236f","type":"ColorBar"}],"title":{"id":"20a38d67-8bf4-495c-ab19-3f514e23a7c3","type":"Title"},"tool_events":{"id":"2a6fefcd-6ab0-4a91-8661-c3b2fa3e0966","type":"ToolEvents"},"toolbar":{"id":"503cabda-daa4-42f9-94ab-f6bdca90ccd9","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"e7f416be-0af9-4f03-bf3b-87c4876678a9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3ba98527-1ac5-4a49-a6db-c4aa038d5d19","type":"FactorRange"}},"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"},{"attributes":{"overlay":{"id":"72013e77-7d33-4490-bc2c-8a3898a9cd07","type":"BoxAnnotation"},"plot":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"}},"id":"86f96175-e272-40db-8f6a-06efa80d591b","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"888f851e-5bcc-4105-9e6e-7098485c4b60","type":"Rect"},{"attributes":{},"id":"3a3a7f72-fee8-4c48-86a3-4f29678e5073","type":"CategoricalTicker"},{"attributes":{},"id":"e1d9874b-1e85-4c3a-9efb-8e4862383e25","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e3861f8-3659-4b38-89bf-3484135148fd","type":"Rect"},{"attributes":{},"id":"8802843b-eb5b-4b4b-bc46-bc346587d0e8","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d35a4895-6c23-4cb0-9543-1ae141004e90","type":"ColumnDataSource"},"glyph":{"id":"6a80eec6-0bf6-4865-bee1-92e6c743974c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0e8b422b-20b9-4334-a68f-5cf118f8cb78","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e1d9874b-1e85-4c3a-9efb-8e4862383e25","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"},"ticker":{"id":"3a3a7f72-fee8-4c48-86a3-4f29678e5073","type":"CategoricalTicker"}},"id":"6f548cf5-ba4d-4a17-bfe6-b668d6f3dc95","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.4, 12.1]","(9.4, 12.1]","(9.4, 12.1]","(9.4, 12.1]"],"chart_index":[{"POS_ARR_DELAY":"(9.4, 12.1]"},{"POS_ARR_DELAY":"(9.4, 12.1]"},{"POS_ARR_DELAY":"(9.4, 12.1]"},{"POS_ARR_DELAY":"(9.4, 12.1]"}],"values":[9.5,9.578947368421053,11.026315789473685,11.368421052631579],"x":[19,19,19,19],"y":["Wednesday","Thursday","Saturday","Sunday"]}},"id":"d35a4895-6c23-4cb0-9543-1ae141004e90","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"}},"id":"371b3697-9711-486f-bb08-c870ae04125c","type":"HelpTool"},{"attributes":{},"id":"2a6fefcd-6ab0-4a91-8661-c3b2fa3e0966","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(25.5, 28.1]","(25.5, 28.1]","(25.5, 28.1]"],"chart_index":[{"POS_ARR_DELAY":"(25.5, 28.1]"},{"POS_ARR_DELAY":"(25.5, 28.1]"},{"POS_ARR_DELAY":"(25.5, 28.1]"}],"values":[25.625,25.88235294117647,28.133333333333333],"x":[19,20,20],"y":["Monday","Friday","Saturday"]}},"id":"cce7a75e-2f2b-4fcc-bfa8-56776350cd27","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a80eec6-0bf6-4865-bee1-92e6c743974c","type":"Rect"},{"attributes":{"data_source":{"id":"64c59ed6-b9f6-4643-a1d5-f9b12b7f654d","type":"ColumnDataSource"},"glyph":{"id":"eeee788c-9840-44eb-be75-2fdcbfef05dd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e7ef9e9a-2aac-411e-ac28-d89dd2a5f088","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"8802843b-eb5b-4b4b-bc46-bc346587d0e8","type":"BasicTickFormatter"},"plot":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"},"ticker":{"id":"3b7c7d98-a7e9-4e7c-9962-ac17be1d95a6","type":"BasicTicker"}},"id":"b71c1fe0-1b07-4bfa-906b-8669eaafc2ad","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(17.4, 20.1]","(17.4, 20.1]","(17.4, 20.1]"],"chart_index":[{"POS_ARR_DELAY":"(17.4, 20.1]"},{"POS_ARR_DELAY":"(17.4, 20.1]"},{"POS_ARR_DELAY":"(17.4, 20.1]"}],"values":[17.76923076923077,19.333333333333332,18.823529411764707],"x":[20,20,20],"y":["Monday","Thursday","Sunday"]}},"id":"64c59ed6-b9f6-4643-a1d5-f9b12b7f654d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"}},"id":"c4151c18-d585-4402-b540-2af104822b2c","type":"WheelZoomTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"2239359b-92df-439b-9a80-5d4e58a308b5","type":"LinearColorMapper"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4a92526f-9a4a-4e8b-a304-b2ed1b19934a","type":"PanTool"},{"id":"c4151c18-d585-4402-b540-2af104822b2c","type":"WheelZoomTool"},{"id":"86f96175-e272-40db-8f6a-06efa80d591b","type":"BoxZoomTool"},{"id":"6cdefa9d-d43d-4802-853e-c4b9d874404a","type":"SaveTool"},{"id":"a1d614c9-8eb2-4492-8cdc-b56d0cb5ee71","type":"ResetTool"},{"id":"371b3697-9711-486f-bb08-c870ae04125c","type":"HelpTool"}]},"id":"503cabda-daa4-42f9-94ab-f6bdca90ccd9","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"e7f416be-0af9-4f03-bf3b-87c4876678a9","type":"Range1d"},{"attributes":{},"id":"3b7c7d98-a7e9-4e7c-9962-ac17be1d95a6","type":"BasicTicker"},{"attributes":{"data_source":{"id":"cdb099d5-9fda-402f-a567-086ab27a2e47","type":"ColumnDataSource"},"glyph":{"id":"888f851e-5bcc-4105-9e6e-7098485c4b60","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7aac9ad4-b459-496a-b616-7add0c409b16","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"f2826bdf-9d47-4baa-889c-6c219f744779","type":"Panel"}]},"id":"d7938949-570a-4121-b17f-6b395e4a7be3","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(22.8, 25.5]"],"chart_index":[{"POS_ARR_DELAY":"(22.8, 25.5]"}],"values":[24.18421052631579],"x":[19],"y":["Friday"]}},"id":"cdb099d5-9fda-402f-a567-086ab27a2e47","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a8f6e43-3ee5-4680-81b8-cdf7a21b56ab","type":"Rect"},{"attributes":{},"id":"2ddf9faa-25e6-42ae-b9aa-cf4c803f9b0d","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"72013e77-7d33-4490-bc2c-8a3898a9cd07","type":"BoxAnnotation"},{"attributes":{"color_mapper":{"id":"2239359b-92df-439b-9a80-5d4e58a308b5","type":"LinearColorMapper"},"formatter":{"id":"a3de14d2-a79e-4615-9325-3ed65aa21edc","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"4d1f2cc6-e1ce-4ca6-a530-3845e454a577","subtype":"Chart","type":"Plot"},"ticker":{"id":"2ddf9faa-25e6-42ae-b9aa-cf4c803f9b0d","type":"BasicTicker"}},"id":"ea5859c9-c53e-445d-9bac-227ebd04236f","type":"ColorBar"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"20a38d67-8bf4-495c-ab19-3f514e23a7c3","type":"Title"},{"attributes":{},"id":"a3de14d2-a79e-4615-9325-3ed65aa21edc","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c8bb0f2f-6618-4a67-b8c2-4630663f42c5","type":"ColumnDataSource"},"glyph":{"id":"8a8f6e43-3ee5-4680-81b8-cdf7a21b56ab","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e754e648-56fd-4765-9c70-6017927daaa4","type":"GlyphRenderer"}],"root_ids":["d7938949-570a-4121-b17f-6b395e4a7be3"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"c6734ac7-7969-45c2-ac13-e063ae23a644","elementid":"398e6615-f7aa-4e9b-a62b-92282cf9c27e","modelid":"d7938949-570a-4121-b17f-6b395e4a7be3"}];
                  
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