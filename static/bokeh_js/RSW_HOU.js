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
      };var element = document.getElementById("f65a1033-7e84-4c5f-838e-38a444e5a9df");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f65a1033-7e84-4c5f-838e-38a444e5a9df' but no matching script tag was found. ")
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
                  var docs_json = {"abcae2ca-64bc-4752-bc9f-f37715bdb21a":{"roots":{"references":[{"attributes":{},"id":"127e849b-4b13-40be-93d8-be4957184cbd","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.02, 2.4]"],"chart_index":[{"POS_ARR_DELAY":"[-0.02, 2.4]"}],"values":[0.0],"x":[16],"y":["Saturday"]}},"id":"74f6131d-dcef-459e-bc61-8a856d8d0db7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(18.9, 21.2]"],"chart_index":[{"POS_ARR_DELAY":"(18.9, 21.2]"}],"values":[21.22222222222222],"x":[18],"y":["Saturday"]}},"id":"7ab6d6e3-78ef-4b09-a01e-84a3858306a5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7d658a34-dc0b-406e-b792-b4c5d798ca3f","type":"ColumnDataSource"},"glyph":{"id":"a9699c6a-366c-4188-850c-bb6e458e39ba","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0fdd271b-1682-4ded-ba8f-f3ab9a5a3829","type":"GlyphRenderer"},{"attributes":{"child":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"09177dfe-cc37-4a54-9bd1-559ec12fadae","type":"Panel"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"f8d1e970-9f53-4606-823b-bbd3bfd46973","type":"BasicTickFormatter"},"plot":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"},"ticker":{"id":"bd5efef7-bf20-43da-9d96-9c33c5db10ff","type":"BasicTicker"}},"id":"26227d55-96ce-42b8-84de-6ba735b07751","type":"LinearAxis"},{"attributes":{},"id":"f8d1e970-9f53-4606-823b-bbd3bfd46973","type":"BasicTickFormatter"},{"attributes":{},"id":"d88eed53-9d46-49b7-b56c-75baa782522f","type":"BasicTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"bd25eb81-ded4-4771-8645-0cf8d1f60f03","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"},"ticker":{"id":"f22049e4-cd79-44ba-8df2-ab856ac67ea0","type":"CategoricalTicker"}},"id":"2ef010f2-7085-417b-9b9f-02548e4eca8f","type":"CategoricalAxis"},{"attributes":{"color_mapper":{"id":"cad48f95-440b-4270-bb3b-e86b70a30589","type":"LinearColorMapper"},"formatter":{"id":"82cc6dcb-193e-416e-a2cd-29e7da1e42ba","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"},"ticker":{"id":"b7669cd5-eb41-4b50-9208-94572b31cca5","type":"BasicTicker"}},"id":"b9228361-22cf-4243-ad36-1da16445db4e","type":"ColorBar"},{"attributes":{"plot":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"}},"id":"b42890ae-f947-4f63-9189-5f4d0eaff119","type":"PanTool"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"3146a45f-c01e-4e37-85c5-3adffe6f3c3d","type":"FactorRange"},{"attributes":{},"id":"b7669cd5-eb41-4b50-9208-94572b31cca5","type":"BasicTicker"},{"attributes":{},"id":"baf38341-0882-4dc5-8324-22f77fea7a81","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"}},"id":"fd49f950-a261-4a80-9ef3-f209f39f6c1e","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"77ae8d37-ea3b-4eb6-8191-f02e2c51af2b","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"5870f6a6-3bda-4ec8-8b07-bbd886ddaf44","type":"Title"},{"attributes":{"plot":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"}},"id":"5ce95cd1-e26f-4f0c-896b-d359f9b5a30f","type":"WheelZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"baf38341-0882-4dc5-8324-22f77fea7a81","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"},"ticker":{"id":"83d747c6-9e09-4997-86db-e5cd94fb884c","type":"CategoricalTicker"}},"id":"a12ca11f-8727-4014-8701-b6d610cc31ca","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.02, 2.4]"],"chart_index":[{"POS_ARR_DELAY":"[-0.02, 2.4]"}],"values":[0.0],"x":[16],"y":["Saturday"]}},"id":"fe49a595-e38a-4e6f-af17-e99b15036399","type":"ColumnDataSource"},{"attributes":{},"id":"bd5efef7-bf20-43da-9d96-9c33c5db10ff","type":"BasicTicker"},{"attributes":{"child":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"ac714fde-30b5-4862-ba69-9d4bdc306e99","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"40a210cf-0d55-4fbf-8ac5-03eb943499c2","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b42890ae-f947-4f63-9189-5f4d0eaff119","type":"PanTool"},{"id":"90d2987c-8b36-4e5f-9d23-df2968a8adb5","type":"WheelZoomTool"},{"id":"939eb391-034d-43d8-a13a-1b745d613e5d","type":"BoxZoomTool"},{"id":"ecbbf24d-8b5c-40d0-8e3e-f271d2c99809","type":"SaveTool"},{"id":"fd49f950-a261-4a80-9ef3-f209f39f6c1e","type":"ResetTool"},{"id":"f899fbb9-4bfa-48e4-b1d3-2c90b00167de","type":"HelpTool"}]},"id":"2385593f-393d-4b12-b099-5261a30e44e3","type":"Toolbar"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"26227d55-96ce-42b8-84de-6ba735b07751","type":"LinearAxis"}],"left":[{"id":"2ef010f2-7085-417b-9b9f-02548e4eca8f","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"451ca9d2-bd48-4f5c-8f4a-c1fe10740737","type":"BoxAnnotation"},{"id":"3b4d2853-965c-43e9-a482-da7ae091c368","type":"GlyphRenderer"},{"id":"30a96e54-ab5e-4c22-b82c-994a820df416","type":"GlyphRenderer"},{"id":"26227d55-96ce-42b8-84de-6ba735b07751","type":"LinearAxis"},{"id":"2ef010f2-7085-417b-9b9f-02548e4eca8f","type":"CategoricalAxis"},{"id":"6bd4c5d6-bc69-437d-89e7-c59a5037bc3a","type":"ColorBar"}],"right":[{"id":"6bd4c5d6-bc69-437d-89e7-c59a5037bc3a","type":"ColorBar"}],"title":{"id":"5870f6a6-3bda-4ec8-8b07-bbd886ddaf44","type":"Title"},"tool_events":{"id":"8f2ac1e8-dec7-46c2-9275-8d64883518d8","type":"ToolEvents"},"toolbar":{"id":"2385593f-393d-4b12-b099-5261a30e44e3","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"25217413-8863-4e2a-a76d-ef54a96a89d8","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a92f3475-f9e8-4355-a284-bdeede08a202","type":"FactorRange"}},"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"}},"id":"ecbbf24d-8b5c-40d0-8e3e-f271d2c99809","type":"SaveTool"},{"attributes":{"plot":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"}},"id":"3a84d3d3-0105-454e-b0c5-4554c5cc5a75","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d73c98ab-8679-4bb2-9f5f-92536a39bce0","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9699c6a-366c-4188-850c-bb6e458e39ba","type":"Rect"},{"attributes":{},"id":"e7e2487c-83e4-4118-8028-a591697d0a7d","type":"ToolEvents"},{"attributes":{"callback":null,"end":23},"id":"66da79a3-fa06-4e3f-ae31-53486f9868e3","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(18.9, 21.2]"],"chart_index":[{"POS_ARR_DELAY":"(18.9, 21.2]"}],"values":[21.22222222222222],"x":[18],"y":["Saturday"]}},"id":"7d658a34-dc0b-406e-b792-b4c5d798ca3f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7ab6d6e3-78ef-4b09-a01e-84a3858306a5","type":"ColumnDataSource"},"glyph":{"id":"40a210cf-0d55-4fbf-8ac5-03eb943499c2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3b4d2853-965c-43e9-a482-da7ae091c368","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"09177dfe-cc37-4a54-9bd1-559ec12fadae","type":"Panel"},{"id":"ac714fde-30b5-4862-ba69-9d4bdc306e99","type":"Panel"}]},"id":"046ffc7c-0681-45d7-a57f-6ebbe0d3f355","type":"Tabs"},{"attributes":{"plot":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"}},"id":"90d2987c-8b36-4e5f-9d23-df2968a8adb5","type":"WheelZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"127e849b-4b13-40be-93d8-be4957184cbd","type":"BasicTickFormatter"},"plot":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"},"ticker":{"id":"d88eed53-9d46-49b7-b56c-75baa782522f","type":"BasicTicker"}},"id":"35dbefb4-4061-4053-9f63-08a5f8d8209b","type":"LinearAxis"},{"attributes":{"plot":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"}},"id":"f899fbb9-4bfa-48e4-b1d3-2c90b00167de","type":"HelpTool"},{"attributes":{"data_source":{"id":"74f6131d-dcef-459e-bc61-8a856d8d0db7","type":"ColumnDataSource"},"glyph":{"id":"d73c98ab-8679-4bb2-9f5f-92536a39bce0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"30a96e54-ab5e-4c22-b82c-994a820df416","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"}},"id":"f9fea229-6baa-4efb-bff4-6853824a0bd0","type":"HelpTool"},{"attributes":{},"id":"82cc6dcb-193e-416e-a2cd-29e7da1e42ba","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"}},"id":"65cca62c-df66-449d-a873-8f3d0a2e271c","type":"ResetTool"},{"attributes":{},"id":"8f2ac1e8-dec7-46c2-9275-8d64883518d8","type":"ToolEvents"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"cad48f95-440b-4270-bb3b-e86b70a30589","type":"LinearColorMapper"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c32c7901-73cd-4de2-a071-61b44dc73557","type":"PanTool"},{"id":"5ce95cd1-e26f-4f0c-896b-d359f9b5a30f","type":"WheelZoomTool"},{"id":"1c0c3e06-621f-41f0-b0b0-d140dd95fa1b","type":"BoxZoomTool"},{"id":"3a84d3d3-0105-454e-b0c5-4554c5cc5a75","type":"SaveTool"},{"id":"65cca62c-df66-449d-a873-8f3d0a2e271c","type":"ResetTool"},{"id":"f9fea229-6baa-4efb-bff4-6853824a0bd0","type":"HelpTool"}]},"id":"ea2ea7b0-4044-4410-bd84-8b7c54c96d6d","type":"Toolbar"},{"attributes":{},"id":"83d747c6-9e09-4997-86db-e5cd94fb884c","type":"CategoricalTicker"},{"attributes":{"color_mapper":{"id":"ec3d4b6b-033f-468b-87a7-cb433ed8e657","type":"LinearColorMapper"},"formatter":{"id":"ec833aa6-3623-4d47-b0e7-00b4770ec253","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"},"ticker":{"id":"0ff37652-6cea-43af-8fc2-c911116e09a4","type":"BasicTicker"}},"id":"6bd4c5d6-bc69-437d-89e7-c59a5037bc3a","type":"ColorBar"},{"attributes":{"plot":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"}},"id":"c32c7901-73cd-4de2-a071-61b44dc73557","type":"PanTool"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"a92f3475-f9e8-4355-a284-bdeede08a202","type":"FactorRange"},{"attributes":{},"id":"0ff37652-6cea-43af-8fc2-c911116e09a4","type":"BasicTicker"},{"attributes":{"overlay":{"id":"451ca9d2-bd48-4f5c-8f4a-c1fe10740737","type":"BoxAnnotation"},"plot":{"id":"ffb6af7f-2a3e-4b02-84b9-3ed595494811","subtype":"Chart","type":"Plot"}},"id":"939eb391-034d-43d8-a13a-1b745d613e5d","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"9dc5e27e-9806-4909-b114-bdc08c230f18","type":"BoxAnnotation"},"plot":{"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"}},"id":"1c0c3e06-621f-41f0-b0b0-d140dd95fa1b","type":"BoxZoomTool"},{"attributes":{},"id":"f22049e4-cd79-44ba-8df2-ab856ac67ea0","type":"CategoricalTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"35dbefb4-4061-4053-9f63-08a5f8d8209b","type":"LinearAxis"}],"left":[{"id":"a12ca11f-8727-4014-8701-b6d610cc31ca","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"9dc5e27e-9806-4909-b114-bdc08c230f18","type":"BoxAnnotation"},{"id":"0fdd271b-1682-4ded-ba8f-f3ab9a5a3829","type":"GlyphRenderer"},{"id":"8dd5770b-532b-4921-844e-8b8f9eb5c4f5","type":"GlyphRenderer"},{"id":"35dbefb4-4061-4053-9f63-08a5f8d8209b","type":"LinearAxis"},{"id":"a12ca11f-8727-4014-8701-b6d610cc31ca","type":"CategoricalAxis"},{"id":"b9228361-22cf-4243-ad36-1da16445db4e","type":"ColorBar"}],"right":[{"id":"b9228361-22cf-4243-ad36-1da16445db4e","type":"ColorBar"}],"title":{"id":"7a630846-3b1a-4f8c-b8f0-743d3d0d9192","type":"Title"},"tool_events":{"id":"e7e2487c-83e4-4118-8028-a591697d0a7d","type":"ToolEvents"},"toolbar":{"id":"ea2ea7b0-4044-4410-bd84-8b7c54c96d6d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"66da79a3-fa06-4e3f-ae31-53486f9868e3","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3146a45f-c01e-4e37-85c5-3adffe6f3c3d","type":"FactorRange"}},"id":"1a3d9ed8-6d94-4987-977f-a760315231e5","subtype":"Chart","type":"Plot"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"ec3d4b6b-033f-468b-87a7-cb433ed8e657","type":"LinearColorMapper"},{"attributes":{},"id":"bd25eb81-ded4-4771-8645-0cf8d1f60f03","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"451ca9d2-bd48-4f5c-8f4a-c1fe10740737","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9dc5e27e-9806-4909-b114-bdc08c230f18","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"fe49a595-e38a-4e6f-af17-e99b15036399","type":"ColumnDataSource"},"glyph":{"id":"77ae8d37-ea3b-4eb6-8191-f02e2c51af2b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8dd5770b-532b-4921-844e-8b8f9eb5c4f5","type":"GlyphRenderer"},{"attributes":{},"id":"ec833aa6-3623-4d47-b0e7-00b4770ec253","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"7a630846-3b1a-4f8c-b8f0-743d3d0d9192","type":"Title"},{"attributes":{"callback":null,"end":23},"id":"25217413-8863-4e2a-a76d-ef54a96a89d8","type":"Range1d"}],"root_ids":["046ffc7c-0681-45d7-a57f-6ebbe0d3f355"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"abcae2ca-64bc-4752-bc9f-f37715bdb21a","elementid":"f65a1033-7e84-4c5f-838e-38a444e5a9df","modelid":"046ffc7c-0681-45d7-a57f-6ebbe0d3f355"}];
                  
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