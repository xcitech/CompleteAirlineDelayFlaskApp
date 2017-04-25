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
      };var element = document.getElementById("d51c5616-3fc2-4acf-920b-f9ad39c9e229");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd51c5616-3fc2-4acf-920b-f9ad39c9e229' but no matching script tag was found. ")
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
                  var docs_json = {"2d5338b1-35fe-423c-9a24-91c343827672":{"roots":{"references":[{"attributes":{"plot":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"}},"id":"5d126d5e-cd53-4c98-b15f-54539d06e867","type":"HelpTool"},{"attributes":{},"id":"73e1f703-87d4-4481-83f0-2642beea9671","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.021739130434783,11.4,10.113636363636363],"x":[17,16,17],"y":["Wednesday","Thursday","Friday"]}},"id":"ede72c87-fc88-4d5f-8168-a5ddfca414d2","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c12bb0a4-b5ea-44fa-8fc4-cf4aa136b141","type":"Rect"},{"attributes":{},"id":"34ecf8df-cb42-43fb-9679-c2cd28fa4b14","type":"ToolEvents"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a20e4dac-97e4-481b-bc5a-d45c24d0095a","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"35afa485-7697-4f62-8ee1-b5bd73413b6a","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,27.444444444444443,30.0],"x":[9,16,16,19],"y":["Monday","Monday","Tuesday","Saturday"]}},"id":"82b5b9fc-fe37-4eaf-b3bf-011fb85c2a8a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"60ce40e4-ee1a-445c-8c69-bfca1882255f","type":"ColumnDataSource"},"glyph":{"id":"cff3c7a0-90ba-49a8-9a32-04f416e3c059","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"30437ab1-890d-4703-9dce-820c976cefaa","type":"GlyphRenderer"},{"attributes":{"child":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"ab7a6ba9-350a-4978-b8f5-9cae4d8b98ab","type":"Panel"},{"attributes":{"plot":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"}},"id":"7caa560f-5a76-426b-aa59-a1e843ac2f21","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2daaef51-c285-4992-87e2-932cb68e3618","type":"Rect"},{"attributes":{"data_source":{"id":"9a440b18-a767-446b-919b-2f5a9ec840bd","type":"ColumnDataSource"},"glyph":{"id":"98ea5811-e4f7-47ff-abd0-21a750e04bc8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"78028182-9b01-4611-ae47-af9016147bdc","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f17d2ca9-0b0a-461b-b674-db5299eca8f7","type":"ColumnDataSource"},"glyph":{"id":"b20a2375-7f5c-48d8-85ad-7dbb562d6117","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"07524e64-1cd8-4578-831f-36d5356eadbb","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7566d8bc-5885-4a5a-9b41-d1a813a93bba","type":"Rect"},{"attributes":{"data_source":{"id":"ede72c87-fc88-4d5f-8168-a5ddfca414d2","type":"ColumnDataSource"},"glyph":{"id":"7566d8bc-5885-4a5a-9b41-d1a813a93bba","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"50bb8ad3-5835-4201-bc27-657d107bd008","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cff3c7a0-90ba-49a8-9a32-04f416e3c059","type":"Rect"},{"attributes":{},"id":"7ec4f391-9cb9-4ca6-9ef4-21b36de40f83","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"}},"id":"4ffa8503-3119-4305-a375-6168bc1a51af","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.2],"x":[11],"y":["Sunday"]}},"id":"52ff47fd-4d12-4d49-b2be-60460379148b","type":"ColumnDataSource"},{"attributes":{},"id":"031f64f8-3525-4923-b514-17b18d574ad2","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"298c404d-a61f-4974-946e-be1470797cda","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"98ea5811-e4f7-47ff-abd0-21a750e04bc8","type":"Rect"},{"attributes":{"data_source":{"id":"50475e2f-ecf1-4e71-962c-9f41324ba137","type":"ColumnDataSource"},"glyph":{"id":"2daaef51-c285-4992-87e2-932cb68e3618","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"59ab3f0e-1866-4927-8210-106a2b18547f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.416666666666667,4.117647058823529,3.4444444444444446],"x":[13,16,16],"y":["Tuesday","Friday","Sunday"]}},"id":"9a440b18-a767-446b-919b-2f5a9ec840bd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"}},"id":"a9eb5823-f8b3-4669-90be-d5385e3565d7","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,1.8333333333333333,1.9166666666666667,1.2941176470588236,1.3333333333333333,0.6666666666666666,0.7777777777777778],"x":[5,9,13,11,13,13,17],"y":["Wednesday","Wednesday","Wednesday","Thursday","Friday","Saturday","Saturday"]}},"id":"50475e2f-ecf1-4e71-962c-9f41324ba137","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"43cd4e59-0eca-461e-a884-5ca6a5522f00","type":"LinearAxis"}],"left":[{"id":"709f8a76-3b1c-4f03-a37a-becccd4d89fc","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"11847a64-2859-46cb-87b1-0e34915b53ea","type":"BoxAnnotation"},{"id":"5673552b-14db-45d3-8bf8-ef5d77b9f77e","type":"GlyphRenderer"},{"id":"4ab10e1f-bc96-45ca-bef0-21146873b65b","type":"GlyphRenderer"},{"id":"30437ab1-890d-4703-9dce-820c976cefaa","type":"GlyphRenderer"},{"id":"50bb8ad3-5835-4201-bc27-657d107bd008","type":"GlyphRenderer"},{"id":"07524e64-1cd8-4578-831f-36d5356eadbb","type":"GlyphRenderer"},{"id":"78028182-9b01-4611-ae47-af9016147bdc","type":"GlyphRenderer"},{"id":"59ab3f0e-1866-4927-8210-106a2b18547f","type":"GlyphRenderer"},{"id":"43cd4e59-0eca-461e-a884-5ca6a5522f00","type":"LinearAxis"},{"id":"709f8a76-3b1c-4f03-a37a-becccd4d89fc","type":"CategoricalAxis"},{"id":"2a44d333-5193-4155-a1a5-138e49e3639e","type":"ColorBar"}],"right":[{"id":"2a44d333-5193-4155-a1a5-138e49e3639e","type":"ColorBar"}],"title":{"id":"298c404d-a61f-4974-946e-be1470797cda","type":"Title"},"tool_events":{"id":"34ecf8df-cb42-43fb-9679-c2cd28fa4b14","type":"ToolEvents"},"toolbar":{"id":"f5e3aeff-03c9-49ce-b390-deef1138451d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"ef359843-925d-4824-8ab0-38637e08ac48","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a20e4dac-97e4-481b-bc5a-d45c24d0095a","type":"FactorRange"}},"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11847a64-2859-46cb-87b1-0e34915b53ea","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":23},"id":"ef359843-925d-4824-8ab0-38637e08ac48","type":"Range1d"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"2ba80f07-2e28-415c-bb22-de5da45c6de7","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"},"ticker":{"id":"602abe36-462f-4c3c-96b0-61a72b68b654","type":"CategoricalTicker"}},"id":"709f8a76-3b1c-4f03-a37a-becccd4d89fc","type":"CategoricalAxis"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"73e1f703-87d4-4481-83f0-2642beea9671","type":"BasicTickFormatter"},"plot":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"},"ticker":{"id":"d5063999-cd6b-479b-bb81-7fca8ee54f32","type":"BasicTicker"}},"id":"43cd4e59-0eca-461e-a884-5ca6a5522f00","type":"LinearAxis"},{"attributes":{"color_mapper":{"id":"dafcbbf8-0db8-4d71-8dda-1c9d144252b0","type":"LinearColorMapper"},"formatter":{"id":"7ec4f391-9cb9-4ca6-9ef4-21b36de40f83","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"},"ticker":{"id":"031f64f8-3525-4923-b514-17b18d574ad2","type":"BasicTicker"}},"id":"2a44d333-5193-4155-a1a5-138e49e3639e","type":"ColorBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ffa8503-3119-4305-a375-6168bc1a51af","type":"PanTool"},{"id":"7caa560f-5a76-426b-aa59-a1e843ac2f21","type":"WheelZoomTool"},{"id":"b4a4dcf5-0b00-48d2-a735-98d741c23717","type":"BoxZoomTool"},{"id":"a9eb5823-f8b3-4669-90be-d5385e3565d7","type":"SaveTool"},{"id":"8c5fa26a-0566-4380-99b2-fa499303b886","type":"ResetTool"},{"id":"5d126d5e-cd53-4c98-b15f-54539d06e867","type":"HelpTool"}]},"id":"f5e3aeff-03c9-49ce-b390-deef1138451d","type":"Toolbar"},{"attributes":{},"id":"2ba80f07-2e28-415c-bb22-de5da45c6de7","type":"CategoricalTickFormatter"},{"attributes":{"overlay":{"id":"11847a64-2859-46cb-87b1-0e34915b53ea","type":"BoxAnnotation"},"plot":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"}},"id":"b4a4dcf5-0b00-48d2-a735-98d741c23717","type":"BoxZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"ab7a6ba9-350a-4978-b8f5-9cae4d8b98ab","type":"Panel"}]},"id":"af97e000-8dc0-4050-a072-a426e6caa699","type":"Tabs"},{"attributes":{},"id":"602abe36-462f-4c3c-96b0-61a72b68b654","type":"CategoricalTicker"},{"attributes":{},"id":"d5063999-cd6b-479b-bb81-7fca8ee54f32","type":"BasicTicker"},{"attributes":{"data_source":{"id":"82b5b9fc-fe37-4eaf-b3bf-011fb85c2a8a","type":"ColumnDataSource"},"glyph":{"id":"35afa485-7697-4f62-8ee1-b5bd73413b6a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5673552b-14db-45d3-8bf8-ef5d77b9f77e","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b20a2375-7f5c-48d8-85ad-7dbb562d6117","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"dafcbbf8-0db8-4d71-8dda-1c9d144252b0","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"52ff47fd-4d12-4d49-b2be-60460379148b","type":"ColumnDataSource"},"glyph":{"id":"c12bb0a4-b5ea-44fa-8fc4-cf4aa136b141","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4ab10e1f-bc96-45ca-bef0-21146873b65b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.222222222222221,15.2,15.470588235294118,15.5,16.285714285714285,14.882352941176471],"x":[11,13,16,17,9,13],"y":["Monday","Monday","Wednesday","Thursday","Saturday","Sunday"]}},"id":"60ce40e4-ee1a-445c-8c69-bfca1882255f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.366666666666666,6.866666666666666,7.277777777777778,8.8,7.764705882352941,8.428571428571429,7.533333333333333,9.642857142857142,7.9411764705882355,9.333333333333334,9.428571428571429],"x":[17,9,11,17,11,9,13,9,11,9,17],"y":["Monday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"f17d2ca9-0b0a-461b-b674-db5299eca8f7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6382a095-d53e-4709-a8ab-6c257ce02c70","subtype":"Chart","type":"Plot"}},"id":"8c5fa26a-0566-4380-99b2-fa499303b886","type":"ResetTool"}],"root_ids":["af97e000-8dc0-4050-a072-a426e6caa699"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"2d5338b1-35fe-423c-9a24-91c343827672","elementid":"d51c5616-3fc2-4acf-920b-f9ad39c9e229","modelid":"af97e000-8dc0-4050-a072-a426e6caa699"}];
                  
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