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
      };var element = document.getElementById("1652f8c8-e0ae-48f8-96bb-b29419792e85");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1652f8c8-e0ae-48f8-96bb-b29419792e85' but no matching script tag was found. ")
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
                  var docs_json = {"03ff4970-0051-4734-bf0b-b47f4bf8a4de":{"roots":{"references":[{"attributes":{},"id":"6ff4b271-d16d-44ad-bcaa-d01725cb125d","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"}},"id":"24f248e3-9d00-4025-80b3-d06d9b7ba4e3","type":"HelpTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"008239f8-6e6d-4e71-b524-d88a61441b02","type":"LinearAxis"}],"left":[{"id":"0c1b41ee-db27-4f48-8a5c-9eb5d7004a2a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"654b5e61-089d-4ae3-91e5-7cb8e8afd736","type":"BoxAnnotation"},{"id":"c85b0197-6aea-4947-80e0-24b2a04a0f72","type":"GlyphRenderer"},{"id":"6925e104-4ea5-41a9-aa07-27b44f9fa0b5","type":"GlyphRenderer"},{"id":"008239f8-6e6d-4e71-b524-d88a61441b02","type":"LinearAxis"},{"id":"0c1b41ee-db27-4f48-8a5c-9eb5d7004a2a","type":"CategoricalAxis"},{"id":"5fb85e81-b3fc-4ef3-9d65-63403c9416d7","type":"ColorBar"}],"right":[{"id":"5fb85e81-b3fc-4ef3-9d65-63403c9416d7","type":"ColorBar"}],"title":{"id":"922f6db1-582f-409b-b68c-286d3b5bcb6c","type":"Title"},"tool_events":{"id":"dce6f3d2-bf6a-4b21-8fc1-a74653d0d9a1","type":"ToolEvents"},"toolbar":{"id":"593e31d0-bfdb-4191-99ae-f34a68018797","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"1827c5db-5921-48d9-beac-d80cf48de9f1","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"d916e4ca-6c5b-4b67-8ce6-b9aaf349ef56","type":"FactorRange"}},"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9666bb94-7c6a-4f3b-9f4f-526fbf4827e3","type":"PanTool"},{"id":"1dd6d8ca-1daf-4cc3-a18e-dc20f392cc7a","type":"WheelZoomTool"},{"id":"7ea63661-e260-48c8-ab51-8fe6fc008981","type":"BoxZoomTool"},{"id":"e90cbb8e-e6a9-4105-957b-a60ef93ca838","type":"SaveTool"},{"id":"bdb8aa56-e42f-4c7f-b932-d0e28ca42b95","type":"ResetTool"},{"id":"24f248e3-9d00-4025-80b3-d06d9b7ba4e3","type":"HelpTool"}]},"id":"e1947f78-d800-44de-b369-502c95f43b39","type":"Toolbar"},{"attributes":{"overlay":{"id":"654b5e61-089d-4ae3-91e5-7cb8e8afd736","type":"BoxAnnotation"},"plot":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"}},"id":"707e35b2-e975-4ae4-8528-d0e68f9bd75f","type":"BoxZoomTool"},{"attributes":{"child":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"98940563-b822-49c9-b87c-2e2c5b27e03f","type":"Panel"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2abedd78-544c-441a-8af3-efc5b1f91357","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"}},"id":"bdb8aa56-e42f-4c7f-b932-d0e28ca42b95","type":"ResetTool"},{"attributes":{"plot":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"}},"id":"1dd6d8ca-1daf-4cc3-a18e-dc20f392cc7a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"}},"id":"e90cbb8e-e6a9-4105-957b-a60ef93ca838","type":"SaveTool"},{"attributes":{},"id":"ac168956-371d-4297-bfce-266d395d2522","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"}},"id":"c4dacc9a-4032-4592-931c-da50d0625bac","type":"SaveTool"},{"attributes":{},"id":"25521524-bf8b-4234-b565-dfe99c7f3957","type":"BasicTicker"},{"attributes":{"color_mapper":{"id":"788a39c8-679c-4e6a-bbee-84457cfa39b0","type":"LinearColorMapper"},"formatter":{"id":"332af431-feb9-4544-a8c5-4b9eb0e1a98b","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"},"ticker":{"id":"5f05eb4c-5e8c-4a2d-9117-c9f2ec3b35cd","type":"BasicTicker"}},"id":"5fb85e81-b3fc-4ef3-9d65-63403c9416d7","type":"ColorBar"},{"attributes":{},"id":"dce6f3d2-bf6a-4b21-8fc1-a74653d0d9a1","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"922f6db1-582f-409b-b68c-286d3b5bcb6c","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.01, 1.08]","[-0.01, 1.08]","[-0.01, 1.08]","[-0.01, 1.08]","[-0.01, 1.08]"],"chart_index":[{"POS_ARR_DELAY":"[-0.01, 1.08]"},{"POS_ARR_DELAY":"[-0.01, 1.08]"},{"POS_ARR_DELAY":"[-0.01, 1.08]"},{"POS_ARR_DELAY":"[-0.01, 1.08]"},{"POS_ARR_DELAY":"[-0.01, 1.08]"}],"values":[0.0,0.0,0.0,0.0,0.0],"x":[22,22,22,22,22],"y":["Monday","Wednesday","Thursday","Friday","Saturday"]}},"id":"ba2c67b9-0cbc-4edd-8d49-4d79d84436ad","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ecdedf4-39a6-4a68-b8c7-7a13bf3ec26b","type":"Rect"},{"attributes":{},"id":"5f3c8e8b-9fa1-44d8-b54a-a509a07d358f","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"}},"id":"9666bb94-7c6a-4f3b-9f4f-526fbf4827e3","type":"PanTool"},{"attributes":{"callback":null,"tabs":[{"id":"aed917ff-2fb2-49be-bd29-2a14985d647e","type":"Panel"},{"id":"98940563-b822-49c9-b87c-2e2c5b27e03f","type":"Panel"}]},"id":"487010bb-516f-4e0c-8dac-721a1f815dea","type":"Tabs"},{"attributes":{"data_source":{"id":"37c4ee23-758b-49ed-8dcd-a2591746b242","type":"ColumnDataSource"},"glyph":{"id":"c7dc680f-2aae-4122-b104-f3e6eda70ad6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c85b0197-6aea-4947-80e0-24b2a04a0f72","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"}},"id":"def0cca9-671b-4ae5-897a-e9d70e7b6c46","type":"PanTool"},{"attributes":{},"id":"d96cc7c2-2f34-45d0-a857-fb56c6b620c5","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"6593b66f-c0ae-44e3-9e29-546edb5264ed","type":"Title"},{"attributes":{"plot":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"}},"id":"60a68815-258a-4158-acb0-c4eb4ef4dfd7","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.01, 1.08]","[-0.01, 1.08]","[-0.01, 1.08]","[-0.01, 1.08]","[-0.01, 1.08]"],"chart_index":[{"POS_ARR_DELAY":"[-0.01, 1.08]"},{"POS_ARR_DELAY":"[-0.01, 1.08]"},{"POS_ARR_DELAY":"[-0.01, 1.08]"},{"POS_ARR_DELAY":"[-0.01, 1.08]"},{"POS_ARR_DELAY":"[-0.01, 1.08]"}],"values":[0.0,0.0,0.0,0.0,0.0],"x":[22,22,22,22,22],"y":["Monday","Wednesday","Thursday","Friday","Saturday"]}},"id":"c3598a8f-4a25-453f-9b39-f69a281205d1","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"654b5e61-089d-4ae3-91e5-7cb8e8afd736","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"ba2c67b9-0cbc-4edd-8d49-4d79d84436ad","type":"ColumnDataSource"},"glyph":{"id":"9ecdedf4-39a6-4a68-b8c7-7a13bf3ec26b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6925e104-4ea5-41a9-aa07-27b44f9fa0b5","type":"GlyphRenderer"},{"attributes":{},"id":"4528c642-ef0a-41eb-affd-d6dbe81a318f","type":"ToolEvents"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"0e22dacb-0be9-494a-b76a-d4ecc75c5c39","type":"BasicTickFormatter"},"plot":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"},"ticker":{"id":"25521524-bf8b-4234-b565-dfe99c7f3957","type":"BasicTicker"}},"id":"008239f8-6e6d-4e71-b524-d88a61441b02","type":"LinearAxis"},{"attributes":{"callback":null,"end":23},"id":"34ca25bc-ff3d-4881-850f-871b6bf0015e","type":"Range1d"},{"attributes":{},"id":"63c3680b-b1f5-42df-ac29-6d8dadf81dcb","type":"BasicTicker"},{"attributes":{"child":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"aed917ff-2fb2-49be-bd29-2a14985d647e","type":"Panel"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3625013d-2079-4783-a889-7b39e43f47fd","type":"LinearAxis"}],"left":[{"id":"a14d783b-1fc3-41d0-acc0-05140e71f854","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"2abedd78-544c-441a-8af3-efc5b1f91357","type":"BoxAnnotation"},{"id":"c9690f48-80b5-440f-9748-e96f3ded4d71","type":"GlyphRenderer"},{"id":"f667dce6-c1e1-4189-a1e9-d4edc74371b9","type":"GlyphRenderer"},{"id":"3625013d-2079-4783-a889-7b39e43f47fd","type":"LinearAxis"},{"id":"a14d783b-1fc3-41d0-acc0-05140e71f854","type":"CategoricalAxis"},{"id":"a400955b-df64-451c-a0e3-8a95f5394fde","type":"ColorBar"}],"right":[{"id":"a400955b-df64-451c-a0e3-8a95f5394fde","type":"ColorBar"}],"title":{"id":"6593b66f-c0ae-44e3-9e29-546edb5264ed","type":"Title"},"tool_events":{"id":"4528c642-ef0a-41eb-affd-d6dbe81a318f","type":"ToolEvents"},"toolbar":{"id":"e1947f78-d800-44de-b369-502c95f43b39","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"34ca25bc-ff3d-4881-850f-871b6bf0015e","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"effe91a5-b8fa-4792-a281-ee4c318a4301","type":"FactorRange"}},"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"84a88b86-73b9-4445-8354-daab2d156cac","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Monday","Wednesday","Thursday","Friday","Saturday","Sunday","Tuesday"]},"id":"effe91a5-b8fa-4792-a281-ee4c318a4301","type":"FactorRange"},{"attributes":{"color_mapper":{"id":"e37a7efd-ae7f-43e9-9938-784be0ccca8c","type":"LinearColorMapper"},"formatter":{"id":"84a88b86-73b9-4445-8354-daab2d156cac","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"},"ticker":{"id":"63c3680b-b1f5-42df-ac29-6d8dadf81dcb","type":"BasicTicker"}},"id":"a400955b-df64-451c-a0e3-8a95f5394fde","type":"ColorBar"},{"attributes":{},"id":"154283b0-d106-4db4-8aa0-3702982d21a8","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"def0cca9-671b-4ae5-897a-e9d70e7b6c46","type":"PanTool"},{"id":"60a68815-258a-4158-acb0-c4eb4ef4dfd7","type":"WheelZoomTool"},{"id":"707e35b2-e975-4ae4-8528-d0e68f9bd75f","type":"BoxZoomTool"},{"id":"c4dacc9a-4032-4592-931c-da50d0625bac","type":"SaveTool"},{"id":"b7183af4-57bc-47e5-852d-0ffb2be883cb","type":"ResetTool"},{"id":"cd7b55cd-0135-4c92-ac9a-4c228fe4bd22","type":"HelpTool"}]},"id":"593e31d0-bfdb-4191-99ae-f34a68018797","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"1827c5db-5921-48d9-beac-d80cf48de9f1","type":"Range1d"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"788a39c8-679c-4e6a-bbee-84457cfa39b0","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"c3598a8f-4a25-453f-9b39-f69a281205d1","type":"ColumnDataSource"},"glyph":{"id":"a11ba925-b9e5-46b6-aa35-3c7f3cca2814","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f667dce6-c1e1-4189-a1e9-d4edc74371b9","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2abedd78-544c-441a-8af3-efc5b1f91357","type":"BoxAnnotation"},"plot":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"}},"id":"7ea63661-e260-48c8-ab51-8fe6fc008981","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c7dc680f-2aae-4122-b104-f3e6eda70ad6","type":"Rect"},{"attributes":{"plot":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"}},"id":"cd7b55cd-0135-4c92-ac9a-4c228fe4bd22","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"e37a7efd-ae7f-43e9-9938-784be0ccca8c","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.7, 9.8]"],"chart_index":[{"POS_ARR_DELAY":"(8.7, 9.8]"}],"values":[9.75],"x":[22],"y":["Sunday"]}},"id":"7ce9f45b-882f-4401-b57a-f5a714b75e75","type":"ColumnDataSource"},{"attributes":{},"id":"5f05eb4c-5e8c-4a2d-9117-c9f2ec3b35cd","type":"BasicTicker"},{"attributes":{"plot":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"}},"id":"b7183af4-57bc-47e5-852d-0ffb2be883cb","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Monday","Wednesday","Thursday","Friday","Saturday","Sunday","Tuesday"]},"id":"d916e4ca-6c5b-4b67-8ce6-b9aaf349ef56","type":"FactorRange"},{"attributes":{},"id":"0e22dacb-0be9-494a-b76a-d4ecc75c5c39","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab7a2b7a-42e9-4707-8b68-9e56d0d7a059","type":"Rect"},{"attributes":{},"id":"332af431-feb9-4544-a8c5-4b9eb0e1a98b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7ce9f45b-882f-4401-b57a-f5a714b75e75","type":"ColumnDataSource"},"glyph":{"id":"ab7a2b7a-42e9-4707-8b68-9e56d0d7a059","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c9690f48-80b5-440f-9748-e96f3ded4d71","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.7, 9.8]"],"chart_index":[{"POS_ARR_DELAY":"(8.7, 9.8]"}],"values":[9.75],"x":[22],"y":["Sunday"]}},"id":"37c4ee23-758b-49ed-8dcd-a2591746b242","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"5f3c8e8b-9fa1-44d8-b54a-a509a07d358f","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"},"ticker":{"id":"d96cc7c2-2f34-45d0-a857-fb56c6b620c5","type":"CategoricalTicker"}},"id":"a14d783b-1fc3-41d0-acc0-05140e71f854","type":"CategoricalAxis"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"6ff4b271-d16d-44ad-bcaa-d01725cb125d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"3553fbb4-d9c8-4812-a519-1f55fdd4c480","subtype":"Chart","type":"Plot"},"ticker":{"id":"ac168956-371d-4297-bfce-266d395d2522","type":"CategoricalTicker"}},"id":"0c1b41ee-db27-4f48-8a5c-9eb5d7004a2a","type":"CategoricalAxis"},{"attributes":{},"id":"31c0d75b-731d-46b1-b158-29bf4cd482e3","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"154283b0-d106-4db4-8aa0-3702982d21a8","type":"BasicTickFormatter"},"plot":{"id":"8547f4e8-dd49-4ec8-83c5-1d66c6a4a501","subtype":"Chart","type":"Plot"},"ticker":{"id":"31c0d75b-731d-46b1-b158-29bf4cd482e3","type":"BasicTicker"}},"id":"3625013d-2079-4783-a889-7b39e43f47fd","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a11ba925-b9e5-46b6-aa35-3c7f3cca2814","type":"Rect"}],"root_ids":["487010bb-516f-4e0c-8dac-721a1f815dea"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"03ff4970-0051-4734-bf0b-b47f4bf8a4de","elementid":"1652f8c8-e0ae-48f8-96bb-b29419792e85","modelid":"487010bb-516f-4e0c-8dac-721a1f815dea"}];
                  
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