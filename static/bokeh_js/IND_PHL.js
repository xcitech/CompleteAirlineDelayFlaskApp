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
      };var element = document.getElementById("6180639d-f73b-45a2-8338-a8a2aa31ac5d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6180639d-f73b-45a2-8338-a8a2aa31ac5d' but no matching script tag was found. ")
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
                  var docs_json = {"cc40714a-5223-446a-9efc-0b9fa8bd2eed":{"roots":{"references":[{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"c8ff901b-bdc7-49c5-b0c3-de85c307a380","type":"BasicTickFormatter"},"plot":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"},"ticker":{"id":"07970b2d-a70b-4f91-9db5-d011b61eb4ee","type":"BasicTicker"}},"id":"913e703d-30e9-4989-a905-27bc7af5fe38","type":"LinearAxis"},{"attributes":{"plot":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"}},"id":"31562806-3c6e-4f48-a308-485691a12081","type":"SaveTool"},{"attributes":{"overlay":{"id":"3afda5f4-8226-4a62-85f8-febc1dab4093","type":"BoxAnnotation"},"plot":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"}},"id":"38abf1be-e413-4633-b6b8-9d5bd0dd897b","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7894fa1-ed2f-4618-bf77-15b75d1da4b7","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.166666666666667,3.6,6.111111111111111,4.444444444444445],"x":[7,18,12,15],"y":["Wednesday","Wednesday","Thursday","Thursday"]}},"id":"93a13a39-8ed2-4238-8bab-cd4ca01f0e20","type":"ColumnDataSource"},{"attributes":{},"id":"0db74a88-8034-4ff3-a203-7fb6ed130549","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"}},"id":"17b6f3d3-41b1-415b-9c7b-11a347cc76c4","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d4d7354c-9b86-485d-91ea-19c37d6e3c7b","type":"PanTool"},{"id":"1a1d801a-39a3-451e-bf99-724a2e09cee4","type":"WheelZoomTool"},{"id":"38abf1be-e413-4633-b6b8-9d5bd0dd897b","type":"BoxZoomTool"},{"id":"31562806-3c6e-4f48-a308-485691a12081","type":"SaveTool"},{"id":"1aee5bb6-3943-4b95-bab8-410cf677ff4f","type":"ResetTool"},{"id":"17b6f3d3-41b1-415b-9c7b-11a347cc76c4","type":"HelpTool"}]},"id":"51f82608-422d-461c-94fb-23922e3beb77","type":"Toolbar"},{"attributes":{},"id":"110d353c-9ffd-4857-9588-7921fc0a837a","type":"BasicTicker"},{"attributes":{"data_source":{"id":"54cd52cd-cad0-4aca-8626-0f40a9514771","type":"ColumnDataSource"},"glyph":{"id":"2c13c720-e23d-4851-ac11-c7b458d5ad66","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9b836b9e-1dac-4812-a12d-cd3cacd58876","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"913e703d-30e9-4989-a905-27bc7af5fe38","type":"LinearAxis"}],"left":[{"id":"e34a2c7f-4810-4aae-bc11-5c2c72717efc","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"3afda5f4-8226-4a62-85f8-febc1dab4093","type":"BoxAnnotation"},{"id":"76fc20ba-4abc-49f5-beb3-2ccc76faae8e","type":"GlyphRenderer"},{"id":"9b836b9e-1dac-4812-a12d-cd3cacd58876","type":"GlyphRenderer"},{"id":"f1b1b232-a21b-45cc-928a-7fe352448b97","type":"GlyphRenderer"},{"id":"a5297552-c94b-42a9-9373-eb74e0d9c55f","type":"GlyphRenderer"},{"id":"68916c98-7c61-4737-bf56-08dae4142dc4","type":"GlyphRenderer"},{"id":"bf8d3bb3-a555-45ec-975a-fa72172334e1","type":"GlyphRenderer"},{"id":"68e38344-c204-4dc7-91b4-eb4db85aa9d5","type":"GlyphRenderer"},{"id":"05709300-400a-4b79-b24e-6822b89e50ca","type":"GlyphRenderer"},{"id":"913e703d-30e9-4989-a905-27bc7af5fe38","type":"LinearAxis"},{"id":"e34a2c7f-4810-4aae-bc11-5c2c72717efc","type":"CategoricalAxis"},{"id":"c490fb3b-1ce6-4e88-9549-ecd286222ee3","type":"ColorBar"}],"right":[{"id":"c490fb3b-1ce6-4e88-9549-ecd286222ee3","type":"ColorBar"}],"title":{"id":"8358cc6e-0a6e-4632-adec-9f219def28af","type":"Title"},"tool_events":{"id":"1e5d6473-1d8b-4afb-a228-f696b26163c4","type":"ToolEvents"},"toolbar":{"id":"51f82608-422d-461c-94fb-23922e3beb77","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"26230e23-9f91-4355-8393-e84336f40422","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5023d890-81c6-4ff1-91ec-2c5aa8621001","type":"FactorRange"}},"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"}},"id":"1aee5bb6-3943-4b95-bab8-410cf677ff4f","type":"ResetTool"},{"attributes":{"data_source":{"id":"d8b17a05-b28b-4ebf-ae17-17cb99195cfa","type":"ColumnDataSource"},"glyph":{"id":"173685df-efc1-485a-892f-071d29e9aee1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bf8d3bb3-a555-45ec-975a-fa72172334e1","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3afda5f4-8226-4a62-85f8-febc1dab4093","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.666666666666667,10.0,7.818181818181818,9.454545454545455,7.2,9.0,7.375],"x":[12,15,12,20,7,12,15],"y":["Monday","Monday","Tuesday","Thursday","Friday","Saturday","Sunday"]}},"id":"d8b17a05-b28b-4ebf-ae17-17cb99195cfa","type":"ColumnDataSource"},{"attributes":{"child":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"e5182014-053f-46cf-884b-0f965f0b5dd2","type":"Panel"},{"attributes":{},"id":"9eb4c850-f809-47d6-9931-5edfc2e25ee9","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.75,18.25],"x":[15,15],"y":["Wednesday","Friday"]}},"id":"65e40f5b-b2ee-4a06-88ae-bb4eeeb58b74","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"93a13a39-8ed2-4238-8bab-cd4ca01f0e20","type":"ColumnDataSource"},"glyph":{"id":"fa576a72-ca09-4f74-be7e-47e2021f7d6e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"68e38344-c204-4dc7-91b4-eb4db85aa9d5","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"522ff765-2f94-45d8-ae9b-e14d795223df","type":"Rect"},{"attributes":{"data_source":{"id":"f1fed2ab-9797-4a15-ac3a-f5779b6fd756","type":"ColumnDataSource"},"glyph":{"id":"42904d74-24c9-42d7-9e2a-73042d6db05b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"05709300-400a-4b79-b24e-6822b89e50ca","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"04357a7e-b31e-4f57-b674-bfbf757a03d5","type":"Rect"},{"attributes":{"plot":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"}},"id":"d4d7354c-9b86-485d-91ea-19c37d6e3c7b","type":"PanTool"},{"attributes":{"data_source":{"id":"8e85728a-754d-4c11-b2d2-a70febd63a80","type":"ColumnDataSource"},"glyph":{"id":"522ff765-2f94-45d8-ae9b-e14d795223df","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"76fc20ba-4abc-49f5-beb3-2ccc76faae8e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0],"x":[17,21,17,6,12,17,17,20,21],"y":["Tuesday","Tuesday","Wednesday","Thursday","Friday","Friday","Sunday","Sunday","Sunday"]}},"id":"8e85728a-754d-4c11-b2d2-a70febd63a80","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c13c720-e23d-4851-ac11-c7b458d5ad66","type":"Rect"},{"attributes":{"data_source":{"id":"01605b2f-150c-4649-ab1b-afab97273a22","type":"ColumnDataSource"},"glyph":{"id":"50d26aff-811e-47cd-91b8-9726aba61992","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"68916c98-7c61-4737-bf56-08dae4142dc4","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa576a72-ca09-4f74-be7e-47e2021f7d6e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.2,1.1428571428571428,0.0,0.0,1.0,0.5,0.2727272727272727,1.4,0.0,0.6666666666666666,3.2],"x":[17,7,11,13,15,20,12,7,7,12,18],"y":["Monday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Saturday","Sunday","Sunday"]}},"id":"f1fed2ab-9797-4a15-ac3a-f5779b6fd756","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"9eb4c850-f809-47d6-9931-5edfc2e25ee9","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"},"ticker":{"id":"0db74a88-8034-4ff3-a203-7fb6ed130549","type":"CategoricalTicker"}},"id":"e34a2c7f-4810-4aae-bc11-5c2c72717efc","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5023d890-81c6-4ff1-91ec-2c5aa8621001","type":"FactorRange"},{"attributes":{"data_source":{"id":"65e40f5b-b2ee-4a06-88ae-bb4eeeb58b74","type":"ColumnDataSource"},"glyph":{"id":"04357a7e-b31e-4f57-b674-bfbf757a03d5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f1b1b232-a21b-45cc-928a-7fe352448b97","type":"GlyphRenderer"},{"attributes":{},"id":"c8ff901b-bdc7-49c5-b0c3-de85c307a380","type":"BasicTickFormatter"},{"attributes":{"color_mapper":{"id":"2fd6f045-86c7-4e2c-90b9-4ab66ce4d8bc","type":"LinearColorMapper"},"formatter":{"id":"ee0bd0c5-7358-4cb6-b2de-c3b02d094978","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"},"ticker":{"id":"110d353c-9ffd-4857-9588-7921fc0a837a","type":"BasicTicker"}},"id":"c490fb3b-1ce6-4e88-9549-ecd286222ee3","type":"ColorBar"},{"attributes":{},"id":"07970b2d-a70b-4f91-9db5-d011b61eb4ee","type":"BasicTicker"},{"attributes":{"callback":null,"end":23},"id":"26230e23-9f91-4355-8393-e84336f40422","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"42904d74-24c9-42d7-9e2a-73042d6db05b","type":"Rect"},{"attributes":{"plot":{"id":"117533bd-06f0-40d8-b0f3-78de79d9f035","subtype":"Chart","type":"Plot"}},"id":"1a1d801a-39a3-451e-bf99-724a2e09cee4","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.4,15.9,16.25],"x":[17,18,18],"y":["Thursday","Friday","Saturday"]}},"id":"6ed3c5bb-a6e3-4055-98a7-853f02c524be","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6ed3c5bb-a6e3-4055-98a7-853f02c524be","type":"ColumnDataSource"},"glyph":{"id":"f7894fa1-ed2f-4618-bf77-15b75d1da4b7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a5297552-c94b-42a9-9373-eb74e0d9c55f","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"2fd6f045-86c7-4e2c-90b9-4ab66ce4d8bc","type":"LinearColorMapper"},{"attributes":{},"id":"1e5d6473-1d8b-4afb-a228-f696b26163c4","type":"ToolEvents"},{"attributes":{},"id":"ee0bd0c5-7358-4cb6-b2de-c3b02d094978","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.714285714285714,11.461538461538462,12.5,11.153846153846153],"x":[7,18,18,18],"y":["Monday","Monday","Tuesday","Thursday"]}},"id":"01605b2f-150c-4649-ab1b-afab97273a22","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"8358cc6e-0a6e-4632-adec-9f219def28af","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[25.5],"x":[21],"y":["Thursday"]}},"id":"54cd52cd-cad0-4aca-8626-0f40a9514771","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"50d26aff-811e-47cd-91b8-9726aba61992","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"e5182014-053f-46cf-884b-0f965f0b5dd2","type":"Panel"}]},"id":"720a67ce-911e-4d9d-ac94-fbadfb124f2c","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"173685df-efc1-485a-892f-071d29e9aee1","type":"Rect"}],"root_ids":["720a67ce-911e-4d9d-ac94-fbadfb124f2c"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"cc40714a-5223-446a-9efc-0b9fa8bd2eed","elementid":"6180639d-f73b-45a2-8338-a8a2aa31ac5d","modelid":"720a67ce-911e-4d9d-ac94-fbadfb124f2c"}];
                  
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