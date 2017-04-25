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
      };var element = document.getElementById("6bf27afe-1075-4fa6-bfe3-3538d4713fc6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6bf27afe-1075-4fa6-bfe3-3538d4713fc6' but no matching script tag was found. ")
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
                  var docs_json = {"7e1e1703-1a07-430b-99f1-927a4f0b942f":{"roots":{"references":[{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d37361db-a0b0-4650-8205-b5fa9a6eade3","type":"LinearColorMapper"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"472e162d-10a3-413a-9937-4b60335c0b49","type":"PanTool"},{"id":"c813a0c2-799b-4312-a332-3ce59f873e4d","type":"WheelZoomTool"},{"id":"3858a926-b8cb-4fea-b517-8ea1037f456b","type":"BoxZoomTool"},{"id":"f9d0eb10-27b6-404b-b814-a3165a2008ab","type":"SaveTool"},{"id":"eff760e0-08c4-47bc-8e95-88e136e3d323","type":"ResetTool"},{"id":"d31b0057-7a48-4fee-a83b-88c7fac97a0b","type":"HelpTool"}]},"id":"006cc02d-7ff3-4d83-8eef-c53d9104e9ee","type":"Toolbar"},{"attributes":{"plot":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"}},"id":"d31b0057-7a48-4fee-a83b-88c7fac97a0b","type":"HelpTool"},{"attributes":{"plot":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"}},"id":"337febb6-fe60-4b43-8fcd-3b9f6d9941d4","type":"WheelZoomTool"},{"attributes":{},"id":"bbbc21c6-fb7a-48cc-a16b-1524413f1b33","type":"BasicTicker"},{"attributes":{"overlay":{"id":"d0dff208-f6a2-436f-bd37-c75964c0e8bd","type":"BoxAnnotation"},"plot":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"}},"id":"57bde2a6-a000-49c1-b71b-ae3a3b2178c9","type":"BoxZoomTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5db19eb8-833c-4c5b-bb57-f55a3f0695d0","type":"LinearColorMapper"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"37227c58-30d3-41a5-85bd-16d426f6efcb","type":"LinearAxis"}],"left":[{"id":"b602707e-70df-4201-97dd-e868d7d31be2","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"d0dff208-f6a2-436f-bd37-c75964c0e8bd","type":"BoxAnnotation"},{"id":"8112e148-090c-445f-99aa-a6ff5750030f","type":"GlyphRenderer"},{"id":"37227c58-30d3-41a5-85bd-16d426f6efcb","type":"LinearAxis"},{"id":"b602707e-70df-4201-97dd-e868d7d31be2","type":"CategoricalAxis"},{"id":"683856bd-a3cd-4bec-9d22-b423e2c48ea3","type":"ColorBar"}],"right":[{"id":"683856bd-a3cd-4bec-9d22-b423e2c48ea3","type":"ColorBar"}],"title":{"id":"1c281b19-8820-4d53-8669-7bd8a575baac","type":"Title"},"tool_events":{"id":"06f870e1-5c11-4504-961c-d2f681c8e476","type":"ToolEvents"},"toolbar":{"id":"274a669c-d434-467e-b2b7-f3c6dfdb1f92","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"dafd91bd-1130-4b2c-9fed-c67e9a73cd0f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"15abebfb-dd94-4957-9d71-c5c52895a948","type":"FactorRange"}},"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"}},"id":"4176bd47-e15d-4cb8-9e2b-9358a55cabfe","type":"SaveTool"},{"attributes":{},"id":"d6d64781-677d-4b53-826f-be8cd85bd077","type":"BasicTickFormatter"},{"attributes":{},"id":"e4225309-b8bf-440b-a27e-c0256df92025","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"f0c063db-ce58-4c64-8f17-e362f026115e","type":"FactorRange"},{"attributes":{"plot":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"}},"id":"eff760e0-08c4-47bc-8e95-88e136e3d323","type":"ResetTool"},{"attributes":{"child":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"bb8d6d86-1593-43a6-b980-aa7ef8fa4650","type":"Panel"},{"attributes":{"color_mapper":{"id":"5db19eb8-833c-4c5b-bb57-f55a3f0695d0","type":"LinearColorMapper"},"formatter":{"id":"d6d64781-677d-4b53-826f-be8cd85bd077","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"},"ticker":{"id":"0631c0d2-d01a-4bfe-8baf-198f5e1c5d9b","type":"BasicTicker"}},"id":"683856bd-a3cd-4bec-9d22-b423e2c48ea3","type":"ColorBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3dabbc58-1b74-48ab-9671-356c61a81019","type":"PanTool"},{"id":"337febb6-fe60-4b43-8fcd-3b9f6d9941d4","type":"WheelZoomTool"},{"id":"57bde2a6-a000-49c1-b71b-ae3a3b2178c9","type":"BoxZoomTool"},{"id":"4176bd47-e15d-4cb8-9e2b-9358a55cabfe","type":"SaveTool"},{"id":"c1333de7-5453-4c3f-867d-9e249499da1c","type":"ResetTool"},{"id":"e585a413-1c36-4d1d-985e-1cac09d70392","type":"HelpTool"}]},"id":"274a669c-d434-467e-b2b7-f3c6dfdb1f92","type":"Toolbar"},{"attributes":{},"id":"1b4cf9bf-216b-4412-8547-8fce4c59658c","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.997, 30.00333]"],"chart_index":[{"POS_ARR_DELAY":"(29.997, 30.00333]"}],"values":[30.0],"x":[21],"y":["Sunday"]}},"id":"715a6f3d-7667-489a-986a-1f8995e008a0","type":"ColumnDataSource"},{"attributes":{},"id":"6e47742c-4208-4e42-9d4c-b00dca734b75","type":"BasicTickFormatter"},{"attributes":{},"id":"ecc7c383-284f-4c38-a0f6-b0c85d1a1dbc","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"96cd73e1-8d32-48df-8178-aba7b2cda22f","type":"Title"},{"attributes":{},"id":"d090560c-a65e-47fe-8786-2d6f6eb2fad4","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"1c281b19-8820-4d53-8669-7bd8a575baac","type":"Title"},{"attributes":{},"id":"4b4ba597-637f-4316-b255-32e17a0d49d5","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8daefdbc-0231-45fc-be56-cd8dce84b8f8","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"ffc3d82f-7187-4445-858c-9c07ff43e275","type":"LinearAxis"}],"left":[{"id":"7c03474e-2727-4ec8-ac50-9a18f1c99360","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"33588972-452f-444a-83cf-0db5d85d61b8","type":"BoxAnnotation"},{"id":"61b0f2e0-0d2f-4857-953a-78f98b56e27f","type":"GlyphRenderer"},{"id":"ffc3d82f-7187-4445-858c-9c07ff43e275","type":"LinearAxis"},{"id":"7c03474e-2727-4ec8-ac50-9a18f1c99360","type":"CategoricalAxis"},{"id":"35e6dc88-ef37-4088-ba8f-e85aa9e3c561","type":"ColorBar"}],"right":[{"id":"35e6dc88-ef37-4088-ba8f-e85aa9e3c561","type":"ColorBar"}],"title":{"id":"96cd73e1-8d32-48df-8178-aba7b2cda22f","type":"Title"},"tool_events":{"id":"ecc7c383-284f-4c38-a0f6-b0c85d1a1dbc","type":"ToolEvents"},"toolbar":{"id":"006cc02d-7ff3-4d83-8eef-c53d9104e9ee","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"0601baea-f529-4dfe-8296-7fe27dcde0c2","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"f0c063db-ce58-4c64-8f17-e362f026115e","type":"FactorRange"}},"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"}},"id":"472e162d-10a3-413a-9937-4b60335c0b49","type":"PanTool"},{"attributes":{},"id":"0631c0d2-d01a-4bfe-8baf-198f5e1c5d9b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"715a6f3d-7667-489a-986a-1f8995e008a0","type":"ColumnDataSource"},"glyph":{"id":"812908f7-dbac-4e15-8aaa-d2dc68601261","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"61b0f2e0-0d2f-4857-953a-78f98b56e27f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.997, 30.00333]"],"chart_index":[{"POS_ARR_DELAY":"(29.997, 30.00333]"}],"values":[30.0],"x":[21],"y":["Sunday"]}},"id":"8036e42f-1f2e-4df9-ad9c-5fc274adc29b","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"774c6920-1c98-429b-98be-e66847d3a3d1","type":"Panel"},{"id":"bb8d6d86-1593-43a6-b980-aa7ef8fa4650","type":"Panel"}]},"id":"f252d0f7-22bd-4555-9633-640b056f703c","type":"Tabs"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"98d0d37e-908f-44eb-8a85-e674b2090b65","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"},"ticker":{"id":"cdf6d633-908b-418d-b12d-ca6f66b77f1e","type":"CategoricalTicker"}},"id":"7c03474e-2727-4ec8-ac50-9a18f1c99360","type":"CategoricalAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d0dff208-f6a2-436f-bd37-c75964c0e8bd","type":"BoxAnnotation"},{"attributes":{},"id":"0818f715-669f-4695-b29d-ed5a3de4afb3","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33588972-452f-444a-83cf-0db5d85d61b8","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"}},"id":"c813a0c2-799b-4312-a332-3ce59f873e4d","type":"WheelZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"0268bceb-6e16-45d5-8218-702b56d6ba1a","type":"BasicTickFormatter"},"plot":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"},"ticker":{"id":"1b4cf9bf-216b-4412-8547-8fce4c59658c","type":"BasicTicker"}},"id":"ffc3d82f-7187-4445-858c-9c07ff43e275","type":"LinearAxis"},{"attributes":{"child":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"774c6920-1c98-429b-98be-e66847d3a3d1","type":"Panel"},{"attributes":{"callback":null,"end":23},"id":"0601baea-f529-4dfe-8296-7fe27dcde0c2","type":"Range1d"},{"attributes":{"overlay":{"id":"33588972-452f-444a-83cf-0db5d85d61b8","type":"BoxAnnotation"},"plot":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"}},"id":"3858a926-b8cb-4fea-b517-8ea1037f456b","type":"BoxZoomTool"},{"attributes":{},"id":"06f870e1-5c11-4504-961c-d2f681c8e476","type":"ToolEvents"},{"attributes":{},"id":"98d0d37e-908f-44eb-8a85-e674b2090b65","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"15abebfb-dd94-4957-9d71-c5c52895a948","type":"FactorRange"},{"attributes":{"callback":null,"end":23},"id":"dafd91bd-1130-4b2c-9fed-c67e9a73cd0f","type":"Range1d"},{"attributes":{"color_mapper":{"id":"d37361db-a0b0-4650-8205-b5fa9a6eade3","type":"LinearColorMapper"},"formatter":{"id":"6e47742c-4208-4e42-9d4c-b00dca734b75","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"},"ticker":{"id":"bbbc21c6-fb7a-48cc-a16b-1524413f1b33","type":"BasicTicker"}},"id":"35e6dc88-ef37-4088-ba8f-e85aa9e3c561","type":"ColorBar"},{"attributes":{"plot":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"}},"id":"c1333de7-5453-4c3f-867d-9e249499da1c","type":"ResetTool"},{"attributes":{"plot":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"}},"id":"3dabbc58-1b74-48ab-9671-356c61a81019","type":"PanTool"},{"attributes":{"plot":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"}},"id":"e585a413-1c36-4d1d-985e-1cac09d70392","type":"HelpTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e4225309-b8bf-440b-a27e-c0256df92025","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"},"ticker":{"id":"0818f715-669f-4695-b29d-ed5a3de4afb3","type":"CategoricalTicker"}},"id":"b602707e-70df-4201-97dd-e868d7d31be2","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"0adedaae-4484-42f3-a182-e98a8dc3955d","subtype":"Chart","type":"Plot"}},"id":"f9d0eb10-27b6-404b-b814-a3165a2008ab","type":"SaveTool"},{"attributes":{},"id":"0268bceb-6e16-45d5-8218-702b56d6ba1a","type":"BasicTickFormatter"},{"attributes":{},"id":"cdf6d633-908b-418d-b12d-ca6f66b77f1e","type":"CategoricalTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"d090560c-a65e-47fe-8786-2d6f6eb2fad4","type":"BasicTickFormatter"},"plot":{"id":"31799860-378d-49eb-aa6f-e241ac3ce190","subtype":"Chart","type":"Plot"},"ticker":{"id":"4b4ba597-637f-4316-b255-32e17a0d49d5","type":"BasicTicker"}},"id":"37227c58-30d3-41a5-85bd-16d426f6efcb","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8036e42f-1f2e-4df9-ad9c-5fc274adc29b","type":"ColumnDataSource"},"glyph":{"id":"8daefdbc-0231-45fc-be56-cd8dce84b8f8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8112e148-090c-445f-99aa-a6ff5750030f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"812908f7-dbac-4e15-8aaa-d2dc68601261","type":"Rect"}],"root_ids":["f252d0f7-22bd-4555-9633-640b056f703c"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"7e1e1703-1a07-430b-99f1-927a4f0b942f","elementid":"6bf27afe-1075-4fa6-bfe3-3538d4713fc6","modelid":"f252d0f7-22bd-4555-9633-640b056f703c"}];
                  
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