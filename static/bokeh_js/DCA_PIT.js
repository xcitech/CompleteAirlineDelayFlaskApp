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
      };var element = document.getElementById("7fb5f30d-c17f-45fb-91b4-b40320bd3c2e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7fb5f30d-c17f-45fb-91b4-b40320bd3c2e' but no matching script tag was found. ")
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
                  var docs_json = {"9859f88f-8366-44b4-b6c1-0994defdf5f5":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.0],"x":[17],"y":["Friday"]}},"id":"8aa39b3d-1909-4c44-a28b-35fdee56f79d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"}},"id":"85f50ba1-50e8-4c3b-8183-9f86556806b9","type":"ResetTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"7ce273c8-03cf-4df7-af0c-0813312ee807","type":"Title"},{"attributes":{},"id":"bac51b50-4f55-4f02-8569-dffcbfce7b40","type":"CategoricalTickFormatter"},{"attributes":{},"id":"6d894506-9b2c-418d-9a30-949fc8314081","type":"CategoricalTicker"},{"attributes":{"callback":null,"tabs":[{"id":"cdf76852-fc5f-45e3-a952-3a45937499fa","type":"Panel"}]},"id":"4e2f8b73-72ce-43b8-9e62-4110083a8578","type":"Tabs"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f6dcd21e-7c84-4222-902a-011efab2db03","type":"PanTool"},{"id":"f1c60e1a-d5d6-4379-8774-5c137b34a5e9","type":"WheelZoomTool"},{"id":"e680c4a2-b9fa-4f7b-81f3-706aca8e2543","type":"BoxZoomTool"},{"id":"11e3541b-b0d4-4a34-b514-ae82760eaa47","type":"SaveTool"},{"id":"85f50ba1-50e8-4c3b-8183-9f86556806b9","type":"ResetTool"},{"id":"84da83bf-e70f-4849-9864-f79807e8ff56","type":"HelpTool"}]},"id":"01edcb56-c910-418b-a103-18a739e42be1","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"764c91a3-a43e-4345-aec1-2110e84a144c","type":"Rect"},{"attributes":{},"id":"ac77c6c6-4ffb-4b6a-b9de-08256c564257","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"bac51b50-4f55-4f02-8569-dffcbfce7b40","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"6d894506-9b2c-418d-9a30-949fc8314081","type":"CategoricalTicker"}},"id":"ef560b87-6a34-487c-a571-85d2e39ebed4","type":"CategoricalAxis"},{"attributes":{"color_mapper":{"id":"681708a0-e181-407c-87c7-8ed1efabfad9","type":"LinearColorMapper"},"formatter":{"id":"ac77c6c6-4ffb-4b6a-b9de-08256c564257","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"32072662-3a76-422b-b463-841af55acbad","type":"BasicTicker"}},"id":"e9565cbc-411a-4e1f-978c-6d03b4e10b50","type":"ColorBar"},{"attributes":{"callback":null,"end":23},"id":"3038c0d4-4563-4d74-b197-ad4bbff02b4f","type":"Range1d"},{"attributes":{},"id":"6d66ad45-2068-42df-a7e5-dc6fac73256e","type":"BasicTickFormatter"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"681708a0-e181-407c-87c7-8ed1efabfad9","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0],"x":[10],"y":["Sunday"]}},"id":"ebba8f95-813e-4f15-8aa5-b83e4a91ac44","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"b2700263-f342-4392-b32d-e3370e9e33b4","type":"BoxAnnotation"},"plot":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"}},"id":"e680c4a2-b9fa-4f7b-81f3-706aca8e2543","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"}},"id":"84da83bf-e70f-4849-9864-f79807e8ff56","type":"HelpTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"6d66ad45-2068-42df-a7e5-dc6fac73256e","type":"BasicTickFormatter"},"plot":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"},"ticker":{"id":"53f7d42f-ac79-4df1-9d9a-91b44c7e3d1a","type":"BasicTicker"}},"id":"20a61839-958c-45e0-950f-985b57670b6c","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b2700263-f342-4392-b32d-e3370e9e33b4","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"6da8dac5-222f-4f71-831d-fd29844c507e","type":"ColumnDataSource"},"glyph":{"id":"764c91a3-a43e-4345-aec1-2110e84a144c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1a96d2c6-1aaa-4f25-9653-e9b65fbf5159","type":"GlyphRenderer"},{"attributes":{},"id":"53f7d42f-ac79-4df1-9d9a-91b44c7e3d1a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[17],"y":["Tuesday"]}},"id":"9a750fa5-fcf3-4b5b-a391-2acc995cf251","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d7d197a-d6e2-46df-9685-cd9ec01e65c7","type":"Rect"},{"attributes":{"data_source":{"id":"8aa39b3d-1909-4c44-a28b-35fdee56f79d","type":"ColumnDataSource"},"glyph":{"id":"b82c11ea-07e0-42fd-af1a-7ae282d0882e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"36b2caa6-90a1-40ad-8891-1c26d6d8b2ee","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b82c11ea-07e0-42fd-af1a-7ae282d0882e","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f524b33-feb0-4a0d-b9fa-39e2aec233f3","type":"Rect"},{"attributes":{"data_source":{"id":"9a750fa5-fcf3-4b5b-a391-2acc995cf251","type":"ColumnDataSource"},"glyph":{"id":"1d7d197a-d6e2-46df-9685-cd9ec01e65c7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f26fedfa-a0ed-4a0a-99f0-2d5ef8e1040d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"}},"id":"f1c60e1a-d5d6-4379-8774-5c137b34a5e9","type":"WheelZoomTool"},{"attributes":{},"id":"32072662-3a76-422b-b463-841af55acbad","type":"BasicTicker"},{"attributes":{"plot":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"}},"id":"11e3541b-b0d4-4a34-b514-ae82760eaa47","type":"SaveTool"},{"attributes":{"child":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"cdf76852-fc5f-45e3-a952-3a45937499fa","type":"Panel"},{"attributes":{"plot":{"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"}},"id":"f6dcd21e-7c84-4222-902a-011efab2db03","type":"PanTool"},{"attributes":{},"id":"daa8f4f4-3a69-486a-91b2-1badb8dc7d8f","type":"ToolEvents"},{"attributes":{"data_source":{"id":"ebba8f95-813e-4f15-8aa5-b83e4a91ac44","type":"ColumnDataSource"},"glyph":{"id":"1f524b33-feb0-4a0d-b9fa-39e2aec233f3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5a2097e8-9bae-4f83-bb5d-d64bab28c68e","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Tuesday","Thursday","Friday","Sunday","Monday","Wednesday","Saturday"]},"id":"247de543-f9f3-4da3-839c-6c0a040a893c","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0],"x":[11],"y":["Thursday"]}},"id":"6da8dac5-222f-4f71-831d-fd29844c507e","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"20a61839-958c-45e0-950f-985b57670b6c","type":"LinearAxis"}],"left":[{"id":"ef560b87-6a34-487c-a571-85d2e39ebed4","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"b2700263-f342-4392-b32d-e3370e9e33b4","type":"BoxAnnotation"},{"id":"f26fedfa-a0ed-4a0a-99f0-2d5ef8e1040d","type":"GlyphRenderer"},{"id":"1a96d2c6-1aaa-4f25-9653-e9b65fbf5159","type":"GlyphRenderer"},{"id":"36b2caa6-90a1-40ad-8891-1c26d6d8b2ee","type":"GlyphRenderer"},{"id":"5a2097e8-9bae-4f83-bb5d-d64bab28c68e","type":"GlyphRenderer"},{"id":"20a61839-958c-45e0-950f-985b57670b6c","type":"LinearAxis"},{"id":"ef560b87-6a34-487c-a571-85d2e39ebed4","type":"CategoricalAxis"},{"id":"e9565cbc-411a-4e1f-978c-6d03b4e10b50","type":"ColorBar"}],"right":[{"id":"e9565cbc-411a-4e1f-978c-6d03b4e10b50","type":"ColorBar"}],"title":{"id":"7ce273c8-03cf-4df7-af0c-0813312ee807","type":"Title"},"tool_events":{"id":"daa8f4f4-3a69-486a-91b2-1badb8dc7d8f","type":"ToolEvents"},"toolbar":{"id":"01edcb56-c910-418b-a103-18a739e42be1","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"3038c0d4-4563-4d74-b197-ad4bbff02b4f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"247de543-f9f3-4da3-839c-6c0a040a893c","type":"FactorRange"}},"id":"b7a64cbc-3fed-4d68-a9fd-75ff6b8b13a7","subtype":"Chart","type":"Plot"}],"root_ids":["4e2f8b73-72ce-43b8-9e62-4110083a8578"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"9859f88f-8366-44b4-b6c1-0994defdf5f5","elementid":"7fb5f30d-c17f-45fb-91b4-b40320bd3c2e","modelid":"4e2f8b73-72ce-43b8-9e62-4110083a8578"}];
                  
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