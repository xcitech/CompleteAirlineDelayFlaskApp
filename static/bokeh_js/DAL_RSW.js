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
      };var element = document.getElementById("7113168d-3845-4c85-8bad-4de8253a8c50");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7113168d-3845-4c85-8bad-4de8253a8c50' but no matching script tag was found. ")
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
                  var docs_json = {"a0866f10-b4db-420d-81fb-a1a6a78b310e":{"roots":{"references":[{"attributes":{"plot":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"}},"id":"b03369c4-7624-4dcc-a659-e55c292b5f26","type":"SaveTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d19d9c39-d4f2-485a-b604-990254b8416a","type":"LinearColorMapper"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"94e1db8f-29b8-4bdd-877f-0544e73e23c0","type":"BasicTickFormatter"},"plot":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"},"ticker":{"id":"9238f47c-e79d-487d-94b3-2e1037156aad","type":"BasicTicker"}},"id":"47585bf9-136a-4e02-a860-5f4071405316","type":"LinearAxis"},{"attributes":{},"id":"e39eb0f7-136a-4b10-9c4c-1c3303915611","type":"BasicTicker"},{"attributes":{},"id":"e8444a3b-89a2-48e5-8127-3ee3b57c2324","type":"CategoricalTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"7843d32d-9cba-413b-8f95-13b8f192250f","type":"BasicTickFormatter"},"plot":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"},"ticker":{"id":"5d8b1d47-e48e-4892-9e1c-b933fdef264e","type":"BasicTicker"}},"id":"7432da09-b582-46c7-b044-7dc31e58957c","type":"LinearAxis"},{"attributes":{"callback":null,"end":23},"id":"a722646e-7de3-4893-a065-a4a555f42918","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"77511730-fbbb-44de-9366-aa65a87d2ce9","type":"PanTool"},{"id":"6e6d033e-4f6a-4607-9226-26448db7d43d","type":"WheelZoomTool"},{"id":"582b0375-bb38-46fc-aaa3-388a1a63d045","type":"BoxZoomTool"},{"id":"d99cd35d-45cb-472a-9d19-4d915385e1db","type":"SaveTool"},{"id":"4c6458bc-391c-49c6-b091-c24fb55e43a5","type":"ResetTool"},{"id":"26745879-8f4b-4f3e-ad04-390172348f45","type":"HelpTool"}]},"id":"dc3ebc0f-b90e-4a48-800e-af4a4cff7f4e","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"9b6d8a01-602f-4780-894f-cbaf4a2cf1ef","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(27.5, 30]"],"chart_index":[{"POS_ARR_DELAY":"(27.5, 30]"}],"values":[30.0],"x":[10],"y":["Saturday"]}},"id":"b22cc9fe-d9ef-410c-ad3e-a67888d2119c","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"ca25d5ec-2636-4fff-831c-fa17ca1f6db9","type":"Panel"},{"id":"7903bfd3-45a4-4568-952e-ce8dcd803fc3","type":"Panel"}]},"id":"e05b490b-be42-4fe4-9a2b-b5725f9da594","type":"Tabs"},{"attributes":{"data_source":{"id":"3d8e8f64-4b75-4ede-a8b3-d1dc88738a68","type":"ColumnDataSource"},"glyph":{"id":"0247e603-62a3-413b-b088-fe0ac1e76d12","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"54258071-6e45-4bbc-89cf-7e79808ca388","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"}},"id":"bdcd253f-41f8-4d41-80d9-cb5ef5c30b68","type":"ResetTool"},{"attributes":{},"id":"a712ce4d-e316-4025-a987-56d146560e62","type":"ToolEvents"},{"attributes":{},"id":"a498eed2-0be4-4404-93a3-904d38b3baa2","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"d2695828-c5f5-4d53-a319-c1cb74be5094","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdfc8978-c653-4841-a51a-93a653548b0a","type":"Rect"},{"attributes":{"data_source":{"id":"b22cc9fe-d9ef-410c-ad3e-a67888d2119c","type":"ColumnDataSource"},"glyph":{"id":"51072c70-db76-4b72-8f35-c16ee7b6b9d0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8f807497-ce7c-4255-b36a-0cbe727c15ad","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[7.4, 10]"],"chart_index":[{"POS_ARR_DELAY":"[7.4, 10]"}],"values":[7.444444444444445],"x":[9],"y":["Saturday"]}},"id":"e7448238-f525-4056-91aa-ea25d0974003","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"}},"id":"26745879-8f4b-4f3e-ad04-390172348f45","type":"HelpTool"},{"attributes":{},"id":"183c7b4b-7e05-46d1-894e-06d1ddc64969","type":"CategoricalTickFormatter"},{"attributes":{},"id":"9238f47c-e79d-487d-94b3-2e1037156aad","type":"BasicTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"00cfc58c-70af-4422-b225-4253b992ef72","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"}},"id":"6e6d033e-4f6a-4607-9226-26448db7d43d","type":"WheelZoomTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"7432da09-b582-46c7-b044-7dc31e58957c","type":"LinearAxis"}],"left":[{"id":"289b8426-375b-4588-a455-a0585652f462","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"bf5a2d7f-eb12-4bdf-a49a-ba6b236cbf00","type":"BoxAnnotation"},{"id":"fa7f20f2-2e14-412c-b887-ef5710d2323f","type":"GlyphRenderer"},{"id":"54258071-6e45-4bbc-89cf-7e79808ca388","type":"GlyphRenderer"},{"id":"7432da09-b582-46c7-b044-7dc31e58957c","type":"LinearAxis"},{"id":"289b8426-375b-4588-a455-a0585652f462","type":"CategoricalAxis"},{"id":"a0eb7271-9af7-464e-920c-9532a094b23b","type":"ColorBar"}],"right":[{"id":"a0eb7271-9af7-464e-920c-9532a094b23b","type":"ColorBar"}],"title":{"id":"f21fe8e4-4a66-4dc5-ad69-69fedea56fe8","type":"Title"},"tool_events":{"id":"a498eed2-0be4-4404-93a3-904d38b3baa2","type":"ToolEvents"},"toolbar":{"id":"6c271e93-f494-4635-a421-54b66aecb5fa","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"9b6d8a01-602f-4780-894f-cbaf4a2cf1ef","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"eb7b7e05-fe24-4893-9366-2aa211c88ece","type":"FactorRange"}},"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"864d4615-fc9d-4a6a-9178-d6f9c142409e","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bf5a2d7f-eb12-4bdf-a49a-ba6b236cbf00","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"}},"id":"d99cd35d-45cb-472a-9d19-4d915385e1db","type":"SaveTool"},{"attributes":{},"id":"7843d32d-9cba-413b-8f95-13b8f192250f","type":"BasicTickFormatter"},{"attributes":{},"id":"04e7c2e3-71df-4a73-8d0b-43534444ae18","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"51072c70-db76-4b72-8f35-c16ee7b6b9d0","type":"Rect"},{"attributes":{"overlay":{"id":"bf5a2d7f-eb12-4bdf-a49a-ba6b236cbf00","type":"BoxAnnotation"},"plot":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"}},"id":"33edf449-c8da-420a-ae1f-276af4aab03f","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0247e603-62a3-413b-b088-fe0ac1e76d12","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdf6bbf3-c72e-443c-b1e1-2f767994c04f","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6f5594b1-649b-4708-8184-bf9df2bc5f40","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"}},"id":"55939d68-86c7-47fe-9c16-90ea0f0c1a98","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"6f5594b1-649b-4708-8184-bf9df2bc5f40","type":"BoxAnnotation"},"plot":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"}},"id":"582b0375-bb38-46fc-aaa3-388a1a63d045","type":"BoxZoomTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"47585bf9-136a-4e02-a860-5f4071405316","type":"LinearAxis"}],"left":[{"id":"81ec28e9-d01a-4fbe-a552-f0ebbadce51f","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"6f5594b1-649b-4708-8184-bf9df2bc5f40","type":"BoxAnnotation"},{"id":"8f807497-ce7c-4255-b36a-0cbe727c15ad","type":"GlyphRenderer"},{"id":"e7af2e9d-bc8f-4cfd-a622-7ed126a6a062","type":"GlyphRenderer"},{"id":"47585bf9-136a-4e02-a860-5f4071405316","type":"LinearAxis"},{"id":"81ec28e9-d01a-4fbe-a552-f0ebbadce51f","type":"CategoricalAxis"},{"id":"086cacae-0435-4d9d-8f9b-837712af995e","type":"ColorBar"}],"right":[{"id":"086cacae-0435-4d9d-8f9b-837712af995e","type":"ColorBar"}],"title":{"id":"d2695828-c5f5-4d53-a319-c1cb74be5094","type":"Title"},"tool_events":{"id":"a712ce4d-e316-4025-a987-56d146560e62","type":"ToolEvents"},"toolbar":{"id":"dc3ebc0f-b90e-4a48-800e-af4a4cff7f4e","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a722646e-7de3-4893-a065-a4a555f42918","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0808c108-8944-400e-b61a-b0c0b5050af7","type":"FactorRange"}},"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"}},"id":"77511730-fbbb-44de-9366-aa65a87d2ce9","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"91dcde50-eb1f-47c3-851c-42b8c21e6bd6","type":"PanTool"},{"id":"55939d68-86c7-47fe-9c16-90ea0f0c1a98","type":"WheelZoomTool"},{"id":"33edf449-c8da-420a-ae1f-276af4aab03f","type":"BoxZoomTool"},{"id":"b03369c4-7624-4dcc-a659-e55c292b5f26","type":"SaveTool"},{"id":"bdcd253f-41f8-4d41-80d9-cb5ef5c30b68","type":"ResetTool"},{"id":"2b04d1e4-34af-4ba4-b01d-262365cd9536","type":"HelpTool"}]},"id":"6c271e93-f494-4635-a421-54b66aecb5fa","type":"Toolbar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"93a69c56-e88b-45a4-a546-f606c908d855","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"},"ticker":{"id":"e8444a3b-89a2-48e5-8127-3ee3b57c2324","type":"CategoricalTicker"}},"id":"81ec28e9-d01a-4fbe-a552-f0ebbadce51f","type":"CategoricalAxis"},{"attributes":{},"id":"c5dc57e6-750b-4a4a-81a2-51746621ca2c","type":"CategoricalTicker"},{"attributes":{"child":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"ca25d5ec-2636-4fff-831c-fa17ca1f6db9","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[7.4, 10]"],"chart_index":[{"POS_ARR_DELAY":"[7.4, 10]"}],"values":[7.444444444444445],"x":[9],"y":["Saturday"]}},"id":"3d8e8f64-4b75-4ede-a8b3-d1dc88738a68","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"}},"id":"91dcde50-eb1f-47c3-851c-42b8c21e6bd6","type":"PanTool"},{"attributes":{"color_mapper":{"id":"d19d9c39-d4f2-485a-b604-990254b8416a","type":"LinearColorMapper"},"formatter":{"id":"7d56d9d0-a6f7-4eee-b17b-ad881fd6e73c","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"},"ticker":{"id":"864d4615-fc9d-4a6a-9178-d6f9c142409e","type":"BasicTicker"}},"id":"086cacae-0435-4d9d-8f9b-837712af995e","type":"ColorBar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"183c7b4b-7e05-46d1-894e-06d1ddc64969","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"},"ticker":{"id":"c5dc57e6-750b-4a4a-81a2-51746621ca2c","type":"CategoricalTicker"}},"id":"289b8426-375b-4588-a455-a0585652f462","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"3c1bc2a9-d231-4a79-ab88-bad82a548d09","type":"ColumnDataSource"},"glyph":{"id":"cdfc8978-c653-4841-a51a-93a653548b0a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fa7f20f2-2e14-412c-b887-ef5710d2323f","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"0808c108-8944-400e-b61a-b0c0b5050af7","type":"FactorRange"},{"attributes":{"data_source":{"id":"e7448238-f525-4056-91aa-ea25d0974003","type":"ColumnDataSource"},"glyph":{"id":"cdf6bbf3-c72e-443c-b1e1-2f767994c04f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e7af2e9d-bc8f-4cfd-a622-7ed126a6a062","type":"GlyphRenderer"},{"attributes":{},"id":"5d8b1d47-e48e-4892-9e1c-b933fdef264e","type":"BasicTicker"},{"attributes":{"plot":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"}},"id":"2b04d1e4-34af-4ba4-b01d-262365cd9536","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(27.5, 30]"],"chart_index":[{"POS_ARR_DELAY":"(27.5, 30]"}],"values":[30.0],"x":[10],"y":["Saturday"]}},"id":"3c1bc2a9-d231-4a79-ab88-bad82a548d09","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"}},"id":"4c6458bc-391c-49c6-b091-c24fb55e43a5","type":"ResetTool"},{"attributes":{"color_mapper":{"id":"00cfc58c-70af-4422-b225-4253b992ef72","type":"LinearColorMapper"},"formatter":{"id":"04e7c2e3-71df-4a73-8d0b-43534444ae18","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"829c1bf5-b0c0-4910-aea5-838150f1c305","subtype":"Chart","type":"Plot"},"ticker":{"id":"e39eb0f7-136a-4b10-9c4c-1c3303915611","type":"BasicTicker"}},"id":"a0eb7271-9af7-464e-920c-9532a094b23b","type":"ColorBar"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"f21fe8e4-4a66-4dc5-ad69-69fedea56fe8","type":"Title"},{"attributes":{},"id":"94e1db8f-29b8-4bdd-877f-0544e73e23c0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"eb7b7e05-fe24-4893-9366-2aa211c88ece","type":"FactorRange"},{"attributes":{},"id":"7d56d9d0-a6f7-4eee-b17b-ad881fd6e73c","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"b2570462-b361-46cf-bd4a-1f7f4bf6663a","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"7903bfd3-45a4-4568-952e-ce8dcd803fc3","type":"Panel"},{"attributes":{},"id":"93a69c56-e88b-45a4-a546-f606c908d855","type":"CategoricalTickFormatter"}],"root_ids":["e05b490b-be42-4fe4-9a2b-b5725f9da594"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"a0866f10-b4db-420d-81fb-a1a6a78b310e","elementid":"7113168d-3845-4c85-8bad-4de8253a8c50","modelid":"e05b490b-be42-4fe4-9a2b-b5725f9da594"}];
                  
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