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
      };var element = document.getElementById("2fb35ee9-4926-453f-b1b9-8376601c4cba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2fb35ee9-4926-453f-b1b9-8376601c4cba' but no matching script tag was found. ")
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
                  var docs_json = {"f153ad1a-9283-43e8-a3da-b13e8fcefa92":{"roots":{"references":[{"attributes":{"overlay":{"id":"996e14df-a5ad-4a3d-81ef-808407dc2b65","type":"BoxAnnotation"},"plot":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"}},"id":"d554e87f-e979-4780-89a9-c533d0e480f5","type":"BoxZoomTool"},{"attributes":{},"id":"4efbf896-45e0-42f7-ad8a-323678a504e1","type":"BasicTickFormatter"},{"attributes":{},"id":"e86125ca-21d0-46c6-9359-68dc6511ed24","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"}},"id":"0c5d566a-76b3-49d7-96be-01bde70ff7ed","type":"HelpTool"},{"attributes":{},"id":"46f0aabd-fb09-460d-befe-7d96f681ff89","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"}},"id":"c210b406-7bff-4503-a536-3d4f45ecec9c","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2c8e5ff7-7b06-47a2-a1af-8079510790a2","type":"PanTool"},{"id":"49812c9a-f8cf-494c-8fdb-2bf3f7f4bfe6","type":"WheelZoomTool"},{"id":"0eb8fd70-7d8d-44f5-be8b-5402146fb726","type":"BoxZoomTool"},{"id":"bd09f516-3883-4482-a8b3-e14c4a5bf92b","type":"SaveTool"},{"id":"347b06f9-6023-4070-86e7-bf133e1b6ad7","type":"ResetTool"},{"id":"c210b406-7bff-4503-a536-3d4f45ecec9c","type":"HelpTool"}]},"id":"babfd24b-3c4c-4293-bc27-2fbf99143223","type":"Toolbar"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"86ade59c-c924-42ff-a1b1-68a1f95a0d95","type":"LinearAxis"}],"left":[{"id":"ec2fd0aa-5235-4b91-ab26-fca02801252d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"3d720cf0-208d-4de6-92f6-339cfd3ae5f1","type":"BoxAnnotation"},{"id":"e6ab15f8-0519-4634-bfb2-8cf9006ff03f","type":"GlyphRenderer"},{"id":"86ade59c-c924-42ff-a1b1-68a1f95a0d95","type":"LinearAxis"},{"id":"ec2fd0aa-5235-4b91-ab26-fca02801252d","type":"CategoricalAxis"},{"id":"56d38b01-7890-40c2-b5e9-0ca2141360aa","type":"ColorBar"}],"right":[{"id":"56d38b01-7890-40c2-b5e9-0ca2141360aa","type":"ColorBar"}],"title":{"id":"30b15133-10bc-4117-b1fd-b2b90be951b6","type":"Title"},"tool_events":{"id":"6c7f1fb9-2719-4585-8869-48e4f256625c","type":"ToolEvents"},"toolbar":{"id":"babfd24b-3c4c-4293-bc27-2fbf99143223","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"79dcb6e1-187c-4492-ad0b-cd21b3e9e523","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e2345971-0b34-439c-b6c9-82f742390887","type":"FactorRange"}},"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"}},"id":"bd09f516-3883-4482-a8b3-e14c4a5bf92b","type":"SaveTool"},{"attributes":{"callback":null,"end":23},"id":"79dcb6e1-187c-4492-ad0b-cd21b3e9e523","type":"Range1d"},{"attributes":{"plot":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"}},"id":"e693d472-aea9-470f-ac87-f9451d2a94ce","type":"ResetTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"3145965b-5c75-4a11-89d9-7890fb81d8fe","type":"LinearColorMapper"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4d865c95-d76e-4fce-97fe-804bba6d5ba3","type":"PanTool"},{"id":"dfc6f486-7131-46e2-997a-3858d7fe785b","type":"WheelZoomTool"},{"id":"d554e87f-e979-4780-89a9-c533d0e480f5","type":"BoxZoomTool"},{"id":"87b30fe0-8c6f-4166-b4d0-a2bcfa830656","type":"SaveTool"},{"id":"e693d472-aea9-470f-ac87-f9451d2a94ce","type":"ResetTool"},{"id":"0c5d566a-76b3-49d7-96be-01bde70ff7ed","type":"HelpTool"}]},"id":"7ed388b6-5c5c-46db-9edd-039ab1965f58","type":"Toolbar"},{"attributes":{"overlay":{"id":"3d720cf0-208d-4de6-92f6-339cfd3ae5f1","type":"BoxAnnotation"},"plot":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"}},"id":"0eb8fd70-7d8d-44f5-be8b-5402146fb726","type":"BoxZoomTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"1dc69121-aa00-45d4-b23e-c1a9469f44a7","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":23},"id":"5ac9d4c9-4a10-424f-86d3-77c3478fba06","type":"Range1d"},{"attributes":{},"id":"31fa468f-cc1b-4453-ad45-b25bccf11c1c","type":"BasicTicker"},{"attributes":{},"id":"d4f794e2-445a-4c57-bd56-3d63e940c407","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e86125ca-21d0-46c6-9359-68dc6511ed24","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"},"ticker":{"id":"02e040ec-6a1e-4fc1-97c6-5dc53f9606ed","type":"CategoricalTicker"}},"id":"9014585d-73d9-4b77-9b03-524a9b094d43","type":"CategoricalAxis"},{"attributes":{"child":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"62930773-5a81-4f47-8102-19f06e1f978a","type":"Panel"},{"attributes":{"data_source":{"id":"993f15b0-edd4-48ac-819d-5d6e7dc92633","type":"ColumnDataSource"},"glyph":{"id":"ba48c942-b218-46d8-bc60-5c940623b5f5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e6ab15f8-0519-4634-bfb2-8cf9006ff03f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"}},"id":"4d865c95-d76e-4fce-97fe-804bba6d5ba3","type":"PanTool"},{"attributes":{},"id":"7f029dd4-2b66-4762-945a-d534b9ee2a70","type":"ToolEvents"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"46f0aabd-fb09-460d-befe-7d96f681ff89","type":"BasicTickFormatter"},"plot":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"},"ticker":{"id":"6f8c8b2d-195e-4be3-bb66-431c07063b18","type":"BasicTicker"}},"id":"3b8a555f-c50a-4922-b7b9-e17e778403ba","type":"LinearAxis"},{"attributes":{},"id":"6f8c8b2d-195e-4be3-bb66-431c07063b18","type":"BasicTicker"},{"attributes":{},"id":"ef7f6e76-1ec5-4c65-a6be-4f1c95af5fd4","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3d720cf0-208d-4de6-92f6-339cfd3ae5f1","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"30b15133-10bc-4117-b1fd-b2b90be951b6","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.72, 16.724]"],"chart_index":[{"POS_ARR_DELAY":"(16.72, 16.724]"}],"values":[16.72222222222222],"x":[8],"y":["Saturday"]}},"id":"993f15b0-edd4-48ac-819d-5d6e7dc92633","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a3bae4d9-a40a-4de3-94ba-97924d30130e","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"},"ticker":{"id":"0b85f3ce-24d7-4251-b735-d86cc8d78859","type":"CategoricalTicker"}},"id":"ec2fd0aa-5235-4b91-ab26-fca02801252d","type":"CategoricalAxis"},{"attributes":{},"id":"0b85f3ce-24d7-4251-b735-d86cc8d78859","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"}},"id":"49812c9a-f8cf-494c-8fdb-2bf3f7f4bfe6","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"25912404-f491-4d4e-a04d-bd331ef38d5f","type":"Rect"},{"attributes":{"child":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"9d898870-3c5b-4542-9d7c-e8237c0b861d","type":"Panel"},{"attributes":{},"id":"31826a31-591d-49ab-9243-6a617786cf0b","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.72, 16.724]"],"chart_index":[{"POS_ARR_DELAY":"(16.72, 16.724]"}],"values":[16.72222222222222],"x":[8],"y":["Saturday"]}},"id":"ab727001-b51b-4976-9e79-8464a41d5ab5","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"e2345971-0b34-439c-b6c9-82f742390887","type":"FactorRange"},{"attributes":{"data_source":{"id":"ab727001-b51b-4976-9e79-8464a41d5ab5","type":"ColumnDataSource"},"glyph":{"id":"25912404-f491-4d4e-a04d-bd331ef38d5f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bb0e22af-ce35-48cf-b851-b2ee255d3498","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"}},"id":"347b06f9-6023-4070-86e7-bf133e1b6ad7","type":"ResetTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"4efbf896-45e0-42f7-ad8a-323678a504e1","type":"BasicTickFormatter"},"plot":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"},"ticker":{"id":"31fa468f-cc1b-4453-ad45-b25bccf11c1c","type":"BasicTicker"}},"id":"86ade59c-c924-42ff-a1b1-68a1f95a0d95","type":"LinearAxis"},{"attributes":{},"id":"a3bae4d9-a40a-4de3-94ba-97924d30130e","type":"CategoricalTickFormatter"},{"attributes":{"color_mapper":{"id":"3145965b-5c75-4a11-89d9-7890fb81d8fe","type":"LinearColorMapper"},"formatter":{"id":"ef7f6e76-1ec5-4c65-a6be-4f1c95af5fd4","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"},"ticker":{"id":"31826a31-591d-49ab-9243-6a617786cf0b","type":"BasicTicker"}},"id":"1414c38f-5156-483d-848f-f4ac3c030cb9","type":"ColorBar"},{"attributes":{},"id":"19c3a814-f4f6-4d29-95b8-b3580ce61b4f","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"996e14df-a5ad-4a3d-81ef-808407dc2b65","type":"BoxAnnotation"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"1c327f6b-6f2c-4113-917d-5d5666fcd93a","type":"FactorRange"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3b8a555f-c50a-4922-b7b9-e17e778403ba","type":"LinearAxis"}],"left":[{"id":"9014585d-73d9-4b77-9b03-524a9b094d43","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"996e14df-a5ad-4a3d-81ef-808407dc2b65","type":"BoxAnnotation"},{"id":"bb0e22af-ce35-48cf-b851-b2ee255d3498","type":"GlyphRenderer"},{"id":"3b8a555f-c50a-4922-b7b9-e17e778403ba","type":"LinearAxis"},{"id":"9014585d-73d9-4b77-9b03-524a9b094d43","type":"CategoricalAxis"},{"id":"1414c38f-5156-483d-848f-f4ac3c030cb9","type":"ColorBar"}],"right":[{"id":"1414c38f-5156-483d-848f-f4ac3c030cb9","type":"ColorBar"}],"title":{"id":"3cbdebab-5403-482e-9fa4-e0c27bff6a10","type":"Title"},"tool_events":{"id":"7f029dd4-2b66-4762-945a-d534b9ee2a70","type":"ToolEvents"},"toolbar":{"id":"7ed388b6-5c5c-46db-9edd-039ab1965f58","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"5ac9d4c9-4a10-424f-86d3-77c3478fba06","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1c327f6b-6f2c-4113-917d-5d5666fcd93a","type":"FactorRange"}},"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"tabs":[{"id":"9d898870-3c5b-4542-9d7c-e8237c0b861d","type":"Panel"},{"id":"62930773-5a81-4f47-8102-19f06e1f978a","type":"Panel"}]},"id":"ade1bf27-39bd-46ca-b898-4f67df5ac473","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba48c942-b218-46d8-bc60-5c940623b5f5","type":"Rect"},{"attributes":{"plot":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"}},"id":"dfc6f486-7131-46e2-997a-3858d7fe785b","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"}},"id":"2c8e5ff7-7b06-47a2-a1af-8079510790a2","type":"PanTool"},{"attributes":{},"id":"6c7f1fb9-2719-4585-8869-48e4f256625c","type":"ToolEvents"},{"attributes":{"plot":{"id":"a325c4f8-e5b2-44a3-8ef8-cd85134c24ac","subtype":"Chart","type":"Plot"}},"id":"87b30fe0-8c6f-4166-b4d0-a2bcfa830656","type":"SaveTool"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"3cbdebab-5403-482e-9fa4-e0c27bff6a10","type":"Title"},{"attributes":{"color_mapper":{"id":"1dc69121-aa00-45d4-b23e-c1a9469f44a7","type":"LinearColorMapper"},"formatter":{"id":"d4f794e2-445a-4c57-bd56-3d63e940c407","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"aefc4346-730d-41f5-a136-304dacbcd008","subtype":"Chart","type":"Plot"},"ticker":{"id":"19c3a814-f4f6-4d29-95b8-b3580ce61b4f","type":"BasicTicker"}},"id":"56d38b01-7890-40c2-b5e9-0ca2141360aa","type":"ColorBar"},{"attributes":{},"id":"02e040ec-6a1e-4fc1-97c6-5dc53f9606ed","type":"CategoricalTicker"}],"root_ids":["ade1bf27-39bd-46ca-b898-4f67df5ac473"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"f153ad1a-9283-43e8-a3da-b13e8fcefa92","elementid":"2fb35ee9-4926-453f-b1b9-8376601c4cba","modelid":"ade1bf27-39bd-46ca-b898-4f67df5ac473"}];
                  
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