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
      };var element = document.getElementById("60c03f9e-531e-4874-b237-b33adb35e955");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '60c03f9e-531e-4874-b237-b33adb35e955' but no matching script tag was found. ")
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
                  var docs_json = {"3e0d1626-02c6-4ec2-8334-bafe089d8799":{"roots":{"references":[{"attributes":{},"id":"39d356cc-3c7d-488e-850b-786ba6cf7ae2","type":"BasicTicker"},{"attributes":{},"id":"94ad3604-4a91-42f6-bb2a-9547290b66ca","type":"BasicTickFormatter"},{"attributes":{},"id":"87163a53-f867-40a6-a722-c39141ec67dc","type":"BasicTicker"},{"attributes":{"child":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"7f2bdf42-c455-4e4f-9670-18912476b0ab","type":"Panel"},{"attributes":{},"id":"a6e7d730-faf2-48aa-93f9-b0f74c8c67df","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"868beea0-2808-472f-aa70-ea80ee391941","type":"ColumnDataSource"},"glyph":{"id":"2bd26abc-9d98-4cf8-b23c-91b625addd20","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"42641652-bb22-45db-9766-18da9830cb5a","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"cf989d01-1733-44a9-aacb-f072dbfbb527","type":"BoxAnnotation"},"plot":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"}},"id":"4687415b-2aa7-4b82-88a6-c80597c3ef83","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4148a70f-642f-4cef-b16e-f3acda7a65dd","type":"PanTool"},{"id":"1627e03c-d669-4f74-aff2-bc083cc7dfbd","type":"WheelZoomTool"},{"id":"4687415b-2aa7-4b82-88a6-c80597c3ef83","type":"BoxZoomTool"},{"id":"fd54dd6d-9482-431a-89ef-b1ed2ee37247","type":"SaveTool"},{"id":"bed4335e-cadd-4c91-93fc-5d3591f8f10f","type":"ResetTool"},{"id":"ad9c73c3-66b4-414a-a10c-17f61df6170f","type":"HelpTool"}]},"id":"8b6a9c60-93de-4178-8444-e581439fca26","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"64b8df3d-9619-4229-a638-62bcff7c650c","type":"FactorRange"},{"attributes":{"color_mapper":{"id":"461782aa-f7e2-4a63-93cc-81ce20d94216","type":"LinearColorMapper"},"formatter":{"id":"a6e7d730-faf2-48aa-93f9-b0f74c8c67df","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"},"ticker":{"id":"39d356cc-3c7d-488e-850b-786ba6cf7ae2","type":"BasicTicker"}},"id":"847a6238-d00a-4a2d-9a49-0d334f12b967","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"10bbde0f-adae-4fec-92ec-b4ea83db9d75","type":"Rect"},{"attributes":{"data_source":{"id":"3e90bfa0-aeed-44c2-8767-5ac8c533d749","type":"ColumnDataSource"},"glyph":{"id":"10bbde0f-adae-4fec-92ec-b4ea83db9d75","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3a7d16a9-bbff-472a-a7f0-72ff7074ff11","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,29.666666666666668],"x":[8,9,9],"y":["Thursday","Thursday","Friday"]}},"id":"ea988075-af45-4bc8-b6ca-72693e9007b4","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2bd26abc-9d98-4cf8-b23c-91b625addd20","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"461782aa-f7e2-4a63-93cc-81ce20d94216","type":"LinearColorMapper"},{"attributes":{},"id":"10e4efed-9cba-490b-a91f-ef3b2c631de3","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"}},"id":"fd54dd6d-9482-431a-89ef-b1ed2ee37247","type":"SaveTool"},{"attributes":{"data_source":{"id":"ea988075-af45-4bc8-b6ca-72693e9007b4","type":"ColumnDataSource"},"glyph":{"id":"a26a3b7e-be42-45de-83de-a5db18714128","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bb78de5c-a7fc-4205-ba5c-1a35a269b443","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,2.0,0.0,0.0,0.0,0.5],"x":[8,9,8,19,11,12],"y":["Tuesday","Wednesday","Friday","Saturday","Sunday","Sunday"]}},"id":"3e90bfa0-aeed-44c2-8767-5ac8c533d749","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"85d24133-2e38-4a65-a88d-b9b2f9c508a3","type":"LinearAxis"}],"left":[{"id":"6f28aec4-da8d-4859-9fea-82c22b75ac56","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"cf989d01-1733-44a9-aacb-f072dbfbb527","type":"BoxAnnotation"},{"id":"bb78de5c-a7fc-4205-ba5c-1a35a269b443","type":"GlyphRenderer"},{"id":"42e9dd6d-0099-4cd8-9ff0-44a485130a4e","type":"GlyphRenderer"},{"id":"42641652-bb22-45db-9766-18da9830cb5a","type":"GlyphRenderer"},{"id":"195cff6f-d4a6-474c-974c-5947414dbfaa","type":"GlyphRenderer"},{"id":"3a7d16a9-bbff-472a-a7f0-72ff7074ff11","type":"GlyphRenderer"},{"id":"85d24133-2e38-4a65-a88d-b9b2f9c508a3","type":"LinearAxis"},{"id":"6f28aec4-da8d-4859-9fea-82c22b75ac56","type":"CategoricalAxis"},{"id":"847a6238-d00a-4a2d-9a49-0d334f12b967","type":"ColorBar"}],"right":[{"id":"847a6238-d00a-4a2d-9a49-0d334f12b967","type":"ColorBar"}],"title":{"id":"2695c1e0-3192-4ff0-bd0b-b404cce0e02e","type":"Title"},"tool_events":{"id":"46410796-c7b6-4f33-9e7c-7fd94339ed9b","type":"ToolEvents"},"toolbar":{"id":"8b6a9c60-93de-4178-8444-e581439fca26","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"bd2271a4-0bca-467b-9e09-7ce26f0faafd","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"64b8df3d-9619-4229-a638-62bcff7c650c","type":"FactorRange"}},"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"2fb05e8f-c630-4681-8eae-45a0f2bcac24","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"9f08231b-62e7-4c0a-806a-9c33e02d813a","type":"ColumnDataSource"},"glyph":{"id":"a94d0437-c0a8-4d64-a657-a75f1b25e0cb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"195cff6f-d4a6-474c-974c-5947414dbfaa","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"}},"id":"bed4335e-cadd-4c91-93fc-5d3591f8f10f","type":"ResetTool"},{"attributes":{"data_source":{"id":"fb2494d2-28be-4783-88ac-65b3efaaae3c","type":"ColumnDataSource"},"glyph":{"id":"c861b301-aabe-42d3-af62-d3d115b6b8ed","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"42e9dd6d-0099-4cd8-9ff0-44a485130a4e","type":"GlyphRenderer"},{"attributes":{},"id":"46410796-c7b6-4f33-9e7c-7fd94339ed9b","type":"ToolEvents"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"94ad3604-4a91-42f6-bb2a-9547290b66ca","type":"BasicTickFormatter"},"plot":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"},"ticker":{"id":"87163a53-f867-40a6-a722-c39141ec67dc","type":"BasicTicker"}},"id":"85d24133-2e38-4a65-a88d-b9b2f9c508a3","type":"LinearAxis"},{"attributes":{"plot":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"}},"id":"4148a70f-642f-4cef-b16e-f3acda7a65dd","type":"PanTool"},{"attributes":{"callback":null,"end":23},"id":"bd2271a4-0bca-467b-9e09-7ce26f0faafd","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a26a3b7e-be42-45de-83de-a5db18714128","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[16.333333333333332],"x":[9],"y":["Monday"]}},"id":"fb2494d2-28be-4783-88ac-65b3efaaae3c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.4],"x":[8],"y":["Saturday"]}},"id":"9f08231b-62e7-4c0a-806a-9c33e02d813a","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"10e4efed-9cba-490b-a91f-ef3b2c631de3","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"},"ticker":{"id":"2fb05e8f-c630-4681-8eae-45a0f2bcac24","type":"CategoricalTicker"}},"id":"6f28aec4-da8d-4859-9fea-82c22b75ac56","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"}},"id":"ad9c73c3-66b4-414a-a10c-17f61df6170f","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf989d01-1733-44a9-aacb-f072dbfbb527","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a94d0437-c0a8-4d64-a657-a75f1b25e0cb","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c861b301-aabe-42d3-af62-d3d115b6b8ed","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[6.882352941176471],"x":[8],"y":["Sunday"]}},"id":"868beea0-2808-472f-aa70-ea80ee391941","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"7f2bdf42-c455-4e4f-9670-18912476b0ab","type":"Panel"}]},"id":"0a2632ba-196d-404e-86ea-3fa63f4896f2","type":"Tabs"},{"attributes":{"plot":{"id":"054a131a-7038-4c0b-b2fc-45a9fa5692ac","subtype":"Chart","type":"Plot"}},"id":"1627e03c-d669-4f74-aff2-bc083cc7dfbd","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"2695c1e0-3192-4ff0-bd0b-b404cce0e02e","type":"Title"}],"root_ids":["0a2632ba-196d-404e-86ea-3fa63f4896f2"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"3e0d1626-02c6-4ec2-8334-bafe089d8799","elementid":"60c03f9e-531e-4874-b237-b33adb35e955","modelid":"0a2632ba-196d-404e-86ea-3fa63f4896f2"}];
                  
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