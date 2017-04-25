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
      };var element = document.getElementById("f92cb91a-6a7a-453b-af21-75eb246e0acb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f92cb91a-6a7a-453b-af21-75eb246e0acb' but no matching script tag was found. ")
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
                  var docs_json = {"c7d80f4c-abac-460f-b61b-64c8e9bca3ea":{"roots":{"references":[{"attributes":{"data_source":{"id":"9304117a-7d53-4f38-9d14-ba7d3d3f5a33","type":"ColumnDataSource"},"glyph":{"id":"1f4d6e69-da39-4e17-a225-00344cb477dc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e2f3b473-9252-4bbf-adbb-67ec2aa0d9e7","type":"GlyphRenderer"},{"attributes":{},"id":"d98957c8-825b-4350-8b3c-59d4c31d0707","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"89eb11c1-0928-49e2-aca2-4a20de499bd7","type":"BoxAnnotation"},"plot":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"}},"id":"deebeaaa-c3e7-434e-903d-ed6e6ed2c041","type":"BoxZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"e605d00c-56c2-434b-a2ba-7b3999ee8c32","type":"BasicTickFormatter"},"plot":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"},"ticker":{"id":"67915674-d9b6-40ed-b811-95b19760cbd4","type":"BasicTicker"}},"id":"bd91b140-d75b-48c6-bce7-e27bc07ad4da","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.483870967741936,20.390243902439025],"x":[18,18],"y":["Friday","Sunday"]}},"id":"dab971d5-189c-4e8c-8f07-14d429264aab","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"dab971d5-189c-4e8c-8f07-14d429264aab","type":"ColumnDataSource"},"glyph":{"id":"a0fabf84-ed15-4ea7-a6fc-2a7047c47b7d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3ed38d4d-df82-4278-96ea-247a64968f91","type":"GlyphRenderer"},{"attributes":{},"id":"67915674-d9b6-40ed-b811-95b19760cbd4","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6b33d91-f4c2-4611-a9d4-207246c22b0c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[10],"y":["Friday"]}},"id":"5fab5aa7-cd3a-4714-a186-48a713f4ef79","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.6666666666666666,1.0,0.0,0.5454545454545454,0.0,3.2222222222222223,1.2,2.0,1.0,2.8,0.0,0.0,0.0,0.0],"x":[8,10,11,12,10,9,10,11,12,20,10,15,9,11,12],"y":["Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"dd2ab714-9159-48ab-948c-51eb922c46e8","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"7f54d926-9a5d-4f99-b91f-4cea979a6f87","type":"LinearColorMapper"},{"attributes":{},"id":"e55d1f23-fbe4-4118-9c0f-f3e3390d789f","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"88f1fee5-ed54-4a8b-87f8-0692f83a4f5d","type":"PanTool"},{"id":"f5a4ad78-ef4e-4246-8785-2c5a36bc13d0","type":"WheelZoomTool"},{"id":"deebeaaa-c3e7-434e-903d-ed6e6ed2c041","type":"BoxZoomTool"},{"id":"8819cfce-be42-43e1-8e24-60d1b385b228","type":"SaveTool"},{"id":"bdbe1067-a9c9-41e1-869d-0db488405e30","type":"ResetTool"},{"id":"5ec35648-8fe0-4d39-b34d-ae2fb181bf4b","type":"HelpTool"}]},"id":"576f5193-2115-4221-a78b-5a88e505e1b6","type":"Toolbar"},{"attributes":{},"id":"e605d00c-56c2-434b-a2ba-7b3999ee8c32","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"}},"id":"8819cfce-be42-43e1-8e24-60d1b385b228","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae406bcd-4772-4e4b-bb18-1cfed107b656","type":"Rect"},{"attributes":{"child":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"8070ff82-2f36-4815-94af-f806e667bd08","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.444444444444445,10.777777777777779,11.1875],"x":[10,15,15],"y":["Monday","Monday","Friday"]}},"id":"cb38652b-bdf0-4156-b168-f9b6532e4871","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"8070ff82-2f36-4815-94af-f806e667bd08","type":"Panel"}]},"id":"64ebcba8-ea3f-4f4f-b814-699414a42d29","type":"Tabs"},{"attributes":{"callback":null,"end":23},"id":"62bdb97b-9fe4-488b-b521-4cba876d5349","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0fabf84-ed15-4ea7-a6fc-2a7047c47b7d","type":"Rect"},{"attributes":{"plot":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"}},"id":"f5a4ad78-ef4e-4246-8785-2c5a36bc13d0","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2670105b-ef76-40d7-a230-3f6ad80aee07","type":"Rect"},{"attributes":{"data_source":{"id":"cb38652b-bdf0-4156-b168-f9b6532e4871","type":"ColumnDataSource"},"glyph":{"id":"1eebd145-cea9-4502-baab-501e59be9892","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"762ef74e-c15c-46c7-9217-ec1822305b59","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.4,4.606060606060606,5.2,4.25,5.666666666666667],"x":[15,18,20,11,15],"y":["Wednesday","Wednesday","Thursday","Friday","Sunday"]}},"id":"bfe492d9-99c0-486a-92cc-6dc1c18ffbcf","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5f955e27-da45-4102-bfd7-bccc2dff772f","type":"FactorRange"},{"attributes":{},"id":"f9d812c4-76ef-44a5-86ac-4dbe3aa9866e","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f4d6e69-da39-4e17-a225-00344cb477dc","type":"Rect"},{"attributes":{"data_source":{"id":"c804cfd3-cf82-47f2-8016-8f54e8bbc5cc","type":"ColumnDataSource"},"glyph":{"id":"ae406bcd-4772-4e4b-bb18-1cfed107b656","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f5d1d859-e4d0-43d1-ae9d-98fe83af5485","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"}},"id":"bdbe1067-a9c9-41e1-869d-0db488405e30","type":"ResetTool"},{"attributes":{"data_source":{"id":"dd2ab714-9159-48ab-948c-51eb922c46e8","type":"ColumnDataSource"},"glyph":{"id":"e299947a-b0c5-46ba-b4ac-b03e048e59fa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bf43ce33-3378-46c7-8c9a-45f9efeb7e71","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1eebd145-cea9-4502-baab-501e59be9892","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"3f030a1d-289d-4559-a82b-7fbd9570fee1","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"},"ticker":{"id":"d98957c8-825b-4350-8b3c-59d4c31d0707","type":"CategoricalTicker"}},"id":"620662f7-c403-4e0c-8f24-6425d66ee3c4","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"}},"id":"88f1fee5-ed54-4a8b-87f8-0692f83a4f5d","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.0,8.209302325581396,7.75,7.555555555555555],"x":[11,18,11,15],"y":["Monday","Tuesday","Wednesday","Thursday"]}},"id":"9304117a-7d53-4f38-9d14-ba7d3d3f5a33","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.48360655737705,14.875,14.45,13.833333333333334,16.3359375,15.0],"x":[17,20,15,20,17,20],"y":["Monday","Monday","Tuesday","Tuesday","Sunday","Sunday"]}},"id":"6b2abc94-74ef-446d-84f0-443b80be8346","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"7f54d926-9a5d-4f99-b91f-4cea979a6f87","type":"LinearColorMapper"},"formatter":{"id":"e55d1f23-fbe4-4118-9c0f-f3e3390d789f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"},"ticker":{"id":"6515b6f4-aa67-45ba-904f-c7b896e4c7ba","type":"BasicTicker"}},"id":"5a0d74cd-6f74-4693-b124-57255215b013","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"07b57c1c-5209-4c1c-b4d4-4e960c3732d7","type":"Rect"},{"attributes":{"data_source":{"id":"bfe492d9-99c0-486a-92cc-6dc1c18ffbcf","type":"ColumnDataSource"},"glyph":{"id":"07b57c1c-5209-4c1c-b4d4-4e960c3732d7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c4a4f8d4-d588-4df4-bb30-68d67064e7dd","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e299947a-b0c5-46ba-b4ac-b03e048e59fa","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"f133209e-7e59-4c47-8eab-51b21a9928a0","type":"Title"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"bd91b140-d75b-48c6-bce7-e27bc07ad4da","type":"LinearAxis"}],"left":[{"id":"620662f7-c403-4e0c-8f24-6425d66ee3c4","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"89eb11c1-0928-49e2-aca2-4a20de499bd7","type":"BoxAnnotation"},{"id":"30a97857-8408-46e7-84c2-efdb36863d26","type":"GlyphRenderer"},{"id":"3ed38d4d-df82-4278-96ea-247a64968f91","type":"GlyphRenderer"},{"id":"f5d1d859-e4d0-43d1-ae9d-98fe83af5485","type":"GlyphRenderer"},{"id":"ea47e885-2fde-4076-9242-a0eba33cc576","type":"GlyphRenderer"},{"id":"762ef74e-c15c-46c7-9217-ec1822305b59","type":"GlyphRenderer"},{"id":"e2f3b473-9252-4bbf-adbb-67ec2aa0d9e7","type":"GlyphRenderer"},{"id":"c4a4f8d4-d588-4df4-bb30-68d67064e7dd","type":"GlyphRenderer"},{"id":"bf43ce33-3378-46c7-8c9a-45f9efeb7e71","type":"GlyphRenderer"},{"id":"bd91b140-d75b-48c6-bce7-e27bc07ad4da","type":"LinearAxis"},{"id":"620662f7-c403-4e0c-8f24-6425d66ee3c4","type":"CategoricalAxis"},{"id":"5a0d74cd-6f74-4693-b124-57255215b013","type":"ColorBar"}],"right":[{"id":"5a0d74cd-6f74-4693-b124-57255215b013","type":"ColorBar"}],"title":{"id":"f133209e-7e59-4c47-8eab-51b21a9928a0","type":"Title"},"tool_events":{"id":"f9d812c4-76ef-44a5-86ac-4dbe3aa9866e","type":"ToolEvents"},"toolbar":{"id":"576f5193-2115-4221-a78b-5a88e505e1b6","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"62bdb97b-9fe4-488b-b521-4cba876d5349","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5f955e27-da45-4102-bfd7-bccc2dff772f","type":"FactorRange"}},"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"89eb11c1-0928-49e2-aca2-4a20de499bd7","type":"BoxAnnotation"},{"attributes":{},"id":"3f030a1d-289d-4559-a82b-7fbd9570fee1","type":"CategoricalTickFormatter"},{"attributes":{},"id":"6515b6f4-aa67-45ba-904f-c7b896e4c7ba","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.84375,19.664,17.016528925619834,16.88888888888889,17.936,16.70731707317073,18.830645161290324],"x":[18,17,17,20,17,18,17],"y":["Monday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday"]}},"id":"c804cfd3-cf82-47f2-8016-8f54e8bbc5cc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6b2abc94-74ef-446d-84f0-443b80be8346","type":"ColumnDataSource"},"glyph":{"id":"b6b33d91-f4c2-4611-a9d4-207246c22b0c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ea47e885-2fde-4076-9242-a0eba33cc576","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5fab5aa7-cd3a-4714-a186-48a713f4ef79","type":"ColumnDataSource"},"glyph":{"id":"2670105b-ef76-40d7-a230-3f6ad80aee07","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"30a97857-8408-46e7-84c2-efdb36863d26","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0aba600f-ec25-4885-9331-27b970c85c0b","subtype":"Chart","type":"Plot"}},"id":"5ec35648-8fe0-4d39-b34d-ae2fb181bf4b","type":"HelpTool"}],"root_ids":["64ebcba8-ea3f-4f4f-b814-699414a42d29"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"c7d80f4c-abac-460f-b61b-64c8e9bca3ea","elementid":"f92cb91a-6a7a-453b-af21-75eb246e0acb","modelid":"64ebcba8-ea3f-4f4f-b814-699414a42d29"}];
                  
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