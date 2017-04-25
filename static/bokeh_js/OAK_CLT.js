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
      };var element = document.getElementById("8ad08772-84f4-440f-9611-7a44e33a66c4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8ad08772-84f4-440f-9611-7a44e33a66c4' but no matching script tag was found. ")
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
                  var docs_json = {"205d752d-b954-46ff-b265-6019e609f2f9":{"roots":{"references":[{"attributes":{"plot":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"}},"id":"0cf253b1-3534-46d8-bd33-54521ff40a08","type":"WheelZoomTool"},{"attributes":{},"id":"d07f1e2b-fc08-44dc-b88c-5a682309082f","type":"BasicTicker"},{"attributes":{"overlay":{"id":"2f45b02e-1031-4bd2-9849-1a59afad6de5","type":"BoxAnnotation"},"plot":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"}},"id":"5d408816-097e-497d-b69c-e4901f188934","type":"BoxZoomTool"},{"attributes":{},"id":"58699e0d-191b-411a-a3d6-2c8ccf627b67","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"}},"id":"2df74216-8409-4eaa-8b5f-73982c49c8b7","type":"SaveTool"},{"attributes":{"plot":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"}},"id":"cad66f7f-9e62-41c9-b42f-15af9081f52f","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f3d260ed-e316-4ec2-83d4-1104fb131886","type":"PanTool"},{"id":"0cf253b1-3534-46d8-bd33-54521ff40a08","type":"WheelZoomTool"},{"id":"8e976b84-46fe-44d7-ad11-4d56db8c247a","type":"BoxZoomTool"},{"id":"2df74216-8409-4eaa-8b5f-73982c49c8b7","type":"SaveTool"},{"id":"cad66f7f-9e62-41c9-b42f-15af9081f52f","type":"ResetTool"},{"id":"864d694b-025e-4996-a205-fac9c13196f6","type":"HelpTool"}]},"id":"7c28405f-69fd-41d5-baf7-5ce617e8c701","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"5521371d-62d8-445e-a5e4-edbe717a80a9","type":"Range1d"},{"attributes":{"plot":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"}},"id":"1686f927-71f3-47b9-aaf4-220ec07a9e11","type":"SaveTool"},{"attributes":{"callback":null,"factors":["Thursday","Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"]},"id":"820d6a89-f367-4cf7-add6-dfa176cb05ce","type":"FactorRange"},{"attributes":{"plot":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"}},"id":"e806877f-f9b6-4c96-a000-586b78bf4455","type":"HelpTool"},{"attributes":{},"id":"c1a95ec8-62ac-4fdc-b9ab-4ca2370aea72","type":"BasicTickFormatter"},{"attributes":{},"id":"17d788ae-5b6d-49d5-baa0-2a894d530fb5","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"0946409e-87ca-4186-bf75-67b73d5f0192","type":"Range1d"},{"attributes":{"color_mapper":{"id":"383b34c3-37da-4a0f-bb5a-06f36e434ec7","type":"LinearColorMapper"},"formatter":{"id":"17d788ae-5b6d-49d5-baa0-2a894d530fb5","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"},"ticker":{"id":"d07f1e2b-fc08-44dc-b88c-5a682309082f","type":"BasicTicker"}},"id":"7e65bb3d-c91d-4eb6-9e32-7a7b7365a8d0","type":"ColorBar"},{"attributes":{},"id":"96ad16da-0fcc-4dd8-8964-5b343c50cc6a","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ce47af9e-2155-4f3f-b434-67d277e06b9b","type":"BoxAnnotation"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"58699e0d-191b-411a-a3d6-2c8ccf627b67","type":"BasicTickFormatter"},"plot":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"},"ticker":{"id":"3f3c13ee-0221-4b07-ace1-7d1253ca533a","type":"BasicTicker"}},"id":"e343d58f-b8a7-4cfa-973d-ab6a0490b11e","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d53ff8df-fc8e-4a96-a10e-fae266e6fbcb","type":"Rect"},{"attributes":{},"id":"8454f16c-f680-4b00-a0d9-3e884801fa3d","type":"CategoricalTicker"},{"attributes":{},"id":"e28b9237-b210-42f2-ad8b-cd09307bd57f","type":"ToolEvents"},{"attributes":{"color_mapper":{"id":"9fa46402-7c49-4500-86d5-72018c57e2a5","type":"LinearColorMapper"},"formatter":{"id":"10710668-2bf7-4651-bf8a-d4ab4b15dcd2","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"},"ticker":{"id":"f2557523-0b14-44cf-928c-34df2ab4dab8","type":"BasicTicker"}},"id":"c2a82924-ec7f-4ffc-98b2-96ffcdc8f26e","type":"ColorBar"},{"attributes":{"overlay":{"id":"ce47af9e-2155-4f3f-b434-67d277e06b9b","type":"BoxAnnotation"},"plot":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"}},"id":"8e976b84-46fe-44d7-ad11-4d56db8c247a","type":"BoxZoomTool"},{"attributes":{},"id":"f2557523-0b14-44cf-928c-34df2ab4dab8","type":"BasicTicker"},{"attributes":{"plot":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"}},"id":"ed3ccaff-2032-4a28-979d-b7bbd1a52d0a","type":"PanTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"bc5dce23-58cc-4c4f-b5ec-4e6d85af37d9","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed3ccaff-2032-4a28-979d-b7bbd1a52d0a","type":"PanTool"},{"id":"bf24d691-7d00-486d-95d9-844a95590b26","type":"WheelZoomTool"},{"id":"5d408816-097e-497d-b69c-e4901f188934","type":"BoxZoomTool"},{"id":"1686f927-71f3-47b9-aaf4-220ec07a9e11","type":"SaveTool"},{"id":"ad8f1ed1-7c8f-40fe-a21c-396cab72646a","type":"ResetTool"},{"id":"e806877f-f9b6-4c96-a000-586b78bf4455","type":"HelpTool"}]},"id":"8d97e0db-2d82-452b-8c82-83452257880d","type":"Toolbar"},{"attributes":{},"id":"3bbed262-94ef-4bb2-9f23-3d67e0ba585a","type":"ToolEvents"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"9fa46402-7c49-4500-86d5-72018c57e2a5","type":"LinearColorMapper"},{"attributes":{"callback":null,"tabs":[{"id":"0b2bc02c-4bca-4526-b978-2979dfab9ca4","type":"Panel"},{"id":"fb2bd30c-4f41-4de9-95af-d17e39c1b95f","type":"Panel"}]},"id":"c23dec1f-47fd-4be9-a010-87be8b65a805","type":"Tabs"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c4fafdb0-4059-4fa9-a8ce-c69dffe5e6a2","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"},"ticker":{"id":"96ad16da-0fcc-4dd8-8964-5b343c50cc6a","type":"CategoricalTicker"}},"id":"13ccab31-e49c-440f-a6aa-43e31641d168","type":"CategoricalAxis"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"383b34c3-37da-4a0f-bb5a-06f36e434ec7","type":"LinearColorMapper"},{"attributes":{},"id":"88dbe5b8-6938-4bd3-8299-91d327e2fe08","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"}},"id":"bf24d691-7d00-486d-95d9-844a95590b26","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"}},"id":"ad8f1ed1-7c8f-40fe-a21c-396cab72646a","type":"ResetTool"},{"attributes":{},"id":"3f3c13ee-0221-4b07-ace1-7d1253ca533a","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"10912db4-b554-4af4-902c-7d0476017b25","type":"Rect"},{"attributes":{"data_source":{"id":"cad54edf-6688-4f0d-96d7-6e9df7c85293","type":"ColumnDataSource"},"glyph":{"id":"d53ff8df-fc8e-4a96-a10e-fae266e6fbcb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3ced1d3f-164f-4653-9acc-0891ba0db617","type":"GlyphRenderer"},{"attributes":{"child":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"},"title":"B6"},"id":"fb2bd30c-4f41-4de9-95af-d17e39c1b95f","type":"Panel"},{"attributes":{"plot":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"}},"id":"864d694b-025e-4996-a205-fac9c13196f6","type":"HelpTool"},{"attributes":{},"id":"10710668-2bf7-4651-bf8a-d4ab4b15dcd2","type":"BasicTickFormatter"},{"attributes":{},"id":"a91016ef-6e55-4b61-abda-772fc2de090e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4, 4.000444]"],"chart_index":[{"POS_ARR_DELAY":"(4, 4.000444]"}],"values":[4.0],"x":[23],"y":["Thursday"]}},"id":"726a55b9-1ea1-47cc-8f31-1430339d1bf0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"726a55b9-1ea1-47cc-8f31-1430339d1bf0","type":"ColumnDataSource"},"glyph":{"id":"10912db4-b554-4af4-902c-7d0476017b25","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ae609798-92ec-4009-87b1-4098fcc5ef22","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"JetBlue Airways"},"id":"b188e407-0eb5-4521-bbee-761b7c11c770","type":"Title"},{"attributes":{"child":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"0b2bc02c-4bca-4526-b978-2979dfab9ca4","type":"Panel"},{"attributes":{"callback":null,"factors":["Thursday","Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"]},"id":"4965a927-8e1d-4ab3-af80-011bfb3b183c","type":"FactorRange"},{"attributes":{},"id":"c4fafdb0-4059-4fa9-a8ce-c69dffe5e6a2","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2f45b02e-1031-4bd2-9849-1a59afad6de5","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"}},"id":"f3d260ed-e316-4ec2-83d4-1104fb131886","type":"PanTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"88dbe5b8-6938-4bd3-8299-91d327e2fe08","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"},"ticker":{"id":"8454f16c-f680-4b00-a0d9-3e884801fa3d","type":"CategoricalTicker"}},"id":"add4c0ea-7559-4237-b9cf-245fef2de815","type":"CategoricalAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e343d58f-b8a7-4cfa-973d-ab6a0490b11e","type":"LinearAxis"}],"left":[{"id":"add4c0ea-7559-4237-b9cf-245fef2de815","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ce47af9e-2155-4f3f-b434-67d277e06b9b","type":"BoxAnnotation"},{"id":"3ced1d3f-164f-4653-9acc-0891ba0db617","type":"GlyphRenderer"},{"id":"e343d58f-b8a7-4cfa-973d-ab6a0490b11e","type":"LinearAxis"},{"id":"add4c0ea-7559-4237-b9cf-245fef2de815","type":"CategoricalAxis"},{"id":"7e65bb3d-c91d-4eb6-9e32-7a7b7365a8d0","type":"ColorBar"}],"right":[{"id":"7e65bb3d-c91d-4eb6-9e32-7a7b7365a8d0","type":"ColorBar"}],"title":{"id":"b188e407-0eb5-4521-bbee-761b7c11c770","type":"Title"},"tool_events":{"id":"3bbed262-94ef-4bb2-9f23-3d67e0ba585a","type":"ToolEvents"},"toolbar":{"id":"7c28405f-69fd-41d5-baf7-5ce617e8c701","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"0946409e-87ca-4186-bf75-67b73d5f0192","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"820d6a89-f367-4cf7-add6-dfa176cb05ce","type":"FactorRange"}},"id":"5a1679de-1c62-4c7f-87d5-c1a009e54b23","subtype":"Chart","type":"Plot"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"71e224dc-ddb7-48ee-8187-90ded08ddc77","type":"LinearAxis"}],"left":[{"id":"13ccab31-e49c-440f-a6aa-43e31641d168","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"2f45b02e-1031-4bd2-9849-1a59afad6de5","type":"BoxAnnotation"},{"id":"ae609798-92ec-4009-87b1-4098fcc5ef22","type":"GlyphRenderer"},{"id":"71e224dc-ddb7-48ee-8187-90ded08ddc77","type":"LinearAxis"},{"id":"13ccab31-e49c-440f-a6aa-43e31641d168","type":"CategoricalAxis"},{"id":"c2a82924-ec7f-4ffc-98b2-96ffcdc8f26e","type":"ColorBar"}],"right":[{"id":"c2a82924-ec7f-4ffc-98b2-96ffcdc8f26e","type":"ColorBar"}],"title":{"id":"bc5dce23-58cc-4c4f-b5ec-4e6d85af37d9","type":"Title"},"tool_events":{"id":"e28b9237-b210-42f2-ad8b-cd09307bd57f","type":"ToolEvents"},"toolbar":{"id":"8d97e0db-2d82-452b-8c82-83452257880d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"5521371d-62d8-445e-a5e4-edbe717a80a9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"4965a927-8e1d-4ab3-af80-011bfb3b183c","type":"FactorRange"}},"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"c1a95ec8-62ac-4fdc-b9ab-4ca2370aea72","type":"BasicTickFormatter"},"plot":{"id":"81aa50f4-3a01-4ec7-ad32-42f46c13c6e6","subtype":"Chart","type":"Plot"},"ticker":{"id":"a91016ef-6e55-4b61-abda-772fc2de090e","type":"BasicTicker"}},"id":"71e224dc-ddb7-48ee-8187-90ded08ddc77","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4, 4.000444]"],"chart_index":[{"POS_ARR_DELAY":"(4, 4.000444]"}],"values":[4.0],"x":[23],"y":["Thursday"]}},"id":"cad54edf-6688-4f0d-96d7-6e9df7c85293","type":"ColumnDataSource"}],"root_ids":["c23dec1f-47fd-4be9-a010-87be8b65a805"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"205d752d-b954-46ff-b265-6019e609f2f9","elementid":"8ad08772-84f4-440f-9611-7a44e33a66c4","modelid":"c23dec1f-47fd-4be9-a010-87be8b65a805"}];
                  
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