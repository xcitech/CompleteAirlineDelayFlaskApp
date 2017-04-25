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
      };var element = document.getElementById("6e746a60-f8ab-4cab-b9e7-39f963da6864");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6e746a60-f8ab-4cab-b9e7-39f963da6864' but no matching script tag was found. ")
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
                  var docs_json = {"173b11a9-7467-48e6-acd3-b4a576aa8f78":{"roots":{"references":[{"attributes":{},"id":"6ceeea19-f9b6-4889-844f-a721031d42a6","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0dd13129-f10c-4613-a685-f5ea34d2d104","type":"PanTool"},{"id":"61268dbd-0126-4cf7-85b3-7cefc8a97ff0","type":"WheelZoomTool"},{"id":"9e2eb298-762d-42a4-906c-b743df47c591","type":"BoxZoomTool"},{"id":"3153eb97-f08b-4e6a-93be-b46bce2ec4b7","type":"SaveTool"},{"id":"768af223-ee6d-4d46-94c2-f69d938425a9","type":"ResetTool"},{"id":"097ae82a-c45b-477b-9f50-b4cd3f17ca92","type":"HelpTool"}]},"id":"ec712b83-c1e8-4414-a1be-d793ad0cd028","type":"Toolbar"},{"attributes":{},"id":"3c1d3cb4-50a1-4b7e-b480-16dc979b5f9c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"}},"id":"3153eb97-f08b-4e6a-93be-b46bce2ec4b7","type":"SaveTool"},{"attributes":{},"id":"e4511032-57ef-4206-aa1f-dd59cd6d78a6","type":"BasicTicker"},{"attributes":{},"id":"829f33d0-f29c-4706-9adc-8c74ed47226a","type":"BasicTicker"},{"attributes":{"overlay":{"id":"44852dee-07b2-427f-9078-5b4e6c5990ac","type":"BoxAnnotation"},"plot":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"}},"id":"9e2eb298-762d-42a4-906c-b743df47c591","type":"BoxZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"5bf9d705-17bf-4d67-8d8b-e8ea409f774d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"},"ticker":{"id":"1ef36275-7770-44fa-8cba-c746397af27c","type":"CategoricalTicker"}},"id":"9d6e6146-5ebd-4dc8-bddf-9f8d61d75d8a","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4, 4.000444]"],"chart_index":[{"POS_ARR_DELAY":"(4, 4.000444]"}],"values":[4.0],"x":[20],"y":["Sunday"]}},"id":"5c1f5c3f-ed39-436e-b0a4-9cb69b669e53","type":"ColumnDataSource"},{"attributes":{},"id":"1ef36275-7770-44fa-8cba-c746397af27c","type":"CategoricalTicker"},{"attributes":{},"id":"5bf9d705-17bf-4d67-8d8b-e8ea409f774d","type":"CategoricalTickFormatter"},{"attributes":{"overlay":{"id":"0c08a6e3-c704-4fb8-9c52-9753675bee7d","type":"BoxAnnotation"},"plot":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"}},"id":"3ad0dc30-6874-4f50-86b9-0892b2d205a1","type":"BoxZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"7cf0aca5-ae9d-4151-a8e8-1ec222a951b5","type":"BasicTickFormatter"},"plot":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"},"ticker":{"id":"c5c034d1-a5d2-45a6-ac04-2ea989264689","type":"BasicTicker"}},"id":"a1110da8-ded4-4636-84ed-00d33a695686","type":"LinearAxis"},{"attributes":{},"id":"73134748-b61a-4b99-9fe8-0b1be215dc9d","type":"ToolEvents"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"ab7259d2-f7f4-4d3e-9d05-0b0247c62e0b","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c324d93-00fd-44a9-be29-8f642e1cc023","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"f5916d65-962f-4d4c-b410-e4e2a857e4de","type":"Panel"},{"id":"e572f7df-5c43-4e6e-9d60-3631a12721e2","type":"Panel"}]},"id":"31bd34e2-0400-4d6e-a56a-915a4c296a39","type":"Tabs"},{"attributes":{"color_mapper":{"id":"fee4537e-afb1-4a3f-803c-b58d07691b5c","type":"LinearColorMapper"},"formatter":{"id":"3c1d3cb4-50a1-4b7e-b480-16dc979b5f9c","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"},"ticker":{"id":"2c20ae99-3608-41ec-8426-b47c1b472d0a","type":"BasicTicker"}},"id":"29ce617a-7a10-4701-bde7-6f961594aa3f","type":"ColorBar"},{"attributes":{"plot":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"}},"id":"0dd13129-f10c-4613-a685-f5ea34d2d104","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d99caa6f-9574-45c3-80b3-4ad3c2502fc4","type":"Rect"},{"attributes":{"child":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"e572f7df-5c43-4e6e-9d60-3631a12721e2","type":"Panel"},{"attributes":{"plot":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"}},"id":"768af223-ee6d-4d46-94c2-f69d938425a9","type":"ResetTool"},{"attributes":{},"id":"c5c034d1-a5d2-45a6-ac04-2ea989264689","type":"BasicTicker"},{"attributes":{"plot":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"}},"id":"3bc65cc9-f9de-4c20-9288-38337268eec8","type":"PanTool"},{"attributes":{"color_mapper":{"id":"ab7259d2-f7f4-4d3e-9d05-0b0247c62e0b","type":"LinearColorMapper"},"formatter":{"id":"79c1b854-8d95-4169-be94-c115326354e0","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"},"ticker":{"id":"829f33d0-f29c-4706-9adc-8c74ed47226a","type":"BasicTicker"}},"id":"6b2c0da5-285e-46c7-b055-44ca03336301","type":"ColorBar"},{"attributes":{"plot":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"}},"id":"4f5be1ad-e387-4a8b-a23f-76a054076230","type":"HelpTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"a1110da8-ded4-4636-84ed-00d33a695686","type":"LinearAxis"}],"left":[{"id":"c21bb3f2-278d-4202-a1dc-622000921c1c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"44852dee-07b2-427f-9078-5b4e6c5990ac","type":"BoxAnnotation"},{"id":"f215e341-088f-46f2-beda-74b80ebc2e17","type":"GlyphRenderer"},{"id":"a1110da8-ded4-4636-84ed-00d33a695686","type":"LinearAxis"},{"id":"c21bb3f2-278d-4202-a1dc-622000921c1c","type":"CategoricalAxis"},{"id":"6b2c0da5-285e-46c7-b055-44ca03336301","type":"ColorBar"}],"right":[{"id":"6b2c0da5-285e-46c7-b055-44ca03336301","type":"ColorBar"}],"title":{"id":"58e79e8c-793e-4ef0-8184-24703177972d","type":"Title"},"tool_events":{"id":"73134748-b61a-4b99-9fe8-0b1be215dc9d","type":"ToolEvents"},"toolbar":{"id":"ec712b83-c1e8-4414-a1be-d793ad0cd028","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"5049073f-764e-49bd-a179-664db26a63de","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a08cd25a-9544-4348-bf47-5c6982f3e0f6","type":"FactorRange"}},"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"2c20ae99-3608-41ec-8426-b47c1b472d0a","type":"BasicTicker"},{"attributes":{"callback":null,"end":23},"id":"5049073f-764e-49bd-a179-664db26a63de","type":"Range1d"},{"attributes":{"plot":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"}},"id":"61268dbd-0126-4cf7-85b3-7cefc8a97ff0","type":"WheelZoomTool"},{"attributes":{},"id":"8bf6a8af-8c0e-4faf-b3e1-c13494da2b66","type":"BasicTickFormatter"},{"attributes":{},"id":"7cf0aca5-ae9d-4151-a8e8-1ec222a951b5","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"e106c5f9-5281-4138-b17b-dc7a606cbc2a","type":"Title"},{"attributes":{"plot":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"}},"id":"097ae82a-c45b-477b-9f50-b4cd3f17ca92","type":"HelpTool"},{"attributes":{"callback":null,"end":23},"id":"4b73b6d7-d09d-475c-94bb-1457529e7f82","type":"Range1d"},{"attributes":{"data_source":{"id":"5c1f5c3f-ed39-436e-b0a4-9cb69b669e53","type":"ColumnDataSource"},"glyph":{"id":"8c324d93-00fd-44a9-be29-8f642e1cc023","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7b4bfbda-ac8c-4a4d-8513-76b25d194c4a","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"71cbb363-417a-4ad5-9781-70a072cb5f49","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"},"ticker":{"id":"3ef7886c-6442-4cf8-b913-4582e981370c","type":"CategoricalTicker"}},"id":"c21bb3f2-278d-4202-a1dc-622000921c1c","type":"CategoricalAxis"},{"attributes":{},"id":"71cbb363-417a-4ad5-9781-70a072cb5f49","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"63265fe0-f243-4d69-bf05-dedfdf7ef825","type":"ColumnDataSource"},"glyph":{"id":"d99caa6f-9574-45c3-80b3-4ad3c2502fc4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f215e341-088f-46f2-beda-74b80ebc2e17","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c08a6e3-c704-4fb8-9c52-9753675bee7d","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"58e79e8c-793e-4ef0-8184-24703177972d","type":"Title"},{"attributes":{},"id":"3ef7886c-6442-4cf8-b913-4582e981370c","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"44852dee-07b2-427f-9078-5b4e6c5990ac","type":"BoxAnnotation"},{"attributes":{"child":{"id":"dc610c3d-624b-472f-8878-153c10a10501","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"f5916d65-962f-4d4c-b410-e4e2a857e4de","type":"Panel"},{"attributes":{"plot":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"}},"id":"71a4f43d-3f1c-49b9-a58e-260aae4154f1","type":"SaveTool"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"5a281f3b-ed12-4e88-8d20-d19090323269","type":"FactorRange"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"1ed06128-7d35-4d21-8e89-a94cce2c2134","type":"LinearAxis"}],"left":[{"id":"9d6e6146-5ebd-4dc8-bddf-9f8d61d75d8a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"0c08a6e3-c704-4fb8-9c52-9753675bee7d","type":"BoxAnnotation"},{"id":"7b4bfbda-ac8c-4a4d-8513-76b25d194c4a","type":"GlyphRenderer"},{"id":"1ed06128-7d35-4d21-8e89-a94cce2c2134","type":"LinearAxis"},{"id":"9d6e6146-5ebd-4dc8-bddf-9f8d61d75d8a","type":"CategoricalAxis"},{"id":"29ce617a-7a10-4701-bde7-6f961594aa3f","type":"ColorBar"}],"right":[{"id":"29ce617a-7a10-4701-bde7-6f961594aa3f","type":"ColorBar"}],"title":{"id":"e106c5f9-5281-4138-b17b-dc7a606cbc2a","type":"Title"},"tool_events":{"id":"6ceeea19-f9b6-4889-844f-a721031d42a6","type":"ToolEvents"},"toolbar":{"id":"a0c43ced-6334-401c-895a-a103417568fd","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"4b73b6d7-d09d-475c-94bb-1457529e7f82","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5a281f3b-ed12-4e88-8d20-d19090323269","type":"FactorRange"}},"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"}},"id":"d15476be-73e5-4e9b-97e7-8de1a53d0a5e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"}},"id":"93cf69b5-292e-482b-9837-2c3511b2e920","type":"ResetTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"fee4537e-afb1-4a3f-803c-b58d07691b5c","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4, 4.000444]"],"chart_index":[{"POS_ARR_DELAY":"(4, 4.000444]"}],"values":[4.0],"x":[20],"y":["Sunday"]}},"id":"63265fe0-f243-4d69-bf05-dedfdf7ef825","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"8bf6a8af-8c0e-4faf-b3e1-c13494da2b66","type":"BasicTickFormatter"},"plot":{"id":"1dae6d3f-06b2-43b7-9dbc-8ff083f8c81a","subtype":"Chart","type":"Plot"},"ticker":{"id":"e4511032-57ef-4206-aa1f-dd59cd6d78a6","type":"BasicTicker"}},"id":"1ed06128-7d35-4d21-8e89-a94cce2c2134","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"a08cd25a-9544-4348-bf47-5c6982f3e0f6","type":"FactorRange"},{"attributes":{},"id":"79c1b854-8d95-4169-be94-c115326354e0","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3bc65cc9-f9de-4c20-9288-38337268eec8","type":"PanTool"},{"id":"d15476be-73e5-4e9b-97e7-8de1a53d0a5e","type":"WheelZoomTool"},{"id":"3ad0dc30-6874-4f50-86b9-0892b2d205a1","type":"BoxZoomTool"},{"id":"71a4f43d-3f1c-49b9-a58e-260aae4154f1","type":"SaveTool"},{"id":"93cf69b5-292e-482b-9837-2c3511b2e920","type":"ResetTool"},{"id":"4f5be1ad-e387-4a8b-a23f-76a054076230","type":"HelpTool"}]},"id":"a0c43ced-6334-401c-895a-a103417568fd","type":"Toolbar"}],"root_ids":["31bd34e2-0400-4d6e-a56a-915a4c296a39"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"173b11a9-7467-48e6-acd3-b4a576aa8f78","elementid":"6e746a60-f8ab-4cab-b9e7-39f963da6864","modelid":"31bd34e2-0400-4d6e-a56a-915a4c296a39"}];
                  
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