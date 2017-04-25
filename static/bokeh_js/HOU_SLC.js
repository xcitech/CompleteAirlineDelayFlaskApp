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
      };var element = document.getElementById("bc816fbd-1b4e-4f40-aea9-c47b141043e8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bc816fbd-1b4e-4f40-aea9-c47b141043e8' but no matching script tag was found. ")
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
                  var docs_json = {"8b5fe3dc-eace-4d50-9543-ddeeb69e0db3":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"a6720780-081a-4f7c-827f-1acf38dc0911","type":"FactorRange"},{"attributes":{"plot":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"}},"id":"0237304b-f6ee-4967-947e-3975836fd45a","type":"SaveTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"463163f5-ac9d-465b-89d2-8f0664ec77b4","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"}},"id":"10f11037-a217-475c-98be-0689687bfb5c","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24.6, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(24.6, 26.7]"}],"values":[26.666666666666668],"x":[20],"y":["Saturday"]}},"id":"bc18ec76-3c29-4bb0-806b-533eedcf5e41","type":"ColumnDataSource"},{"attributes":{},"id":"da063343-4f82-4487-8aeb-3ea634e5ca79","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bb2b3e9d-a186-4708-9b07-49f14c4618b0","type":"PanTool"},{"id":"1480009d-8238-4cc1-a511-ec66a9007c28","type":"WheelZoomTool"},{"id":"1a32f9e4-9da0-449a-b99b-22e62d1bcd0d","type":"BoxZoomTool"},{"id":"9b60a652-df36-4614-971c-fdd5b8d05750","type":"SaveTool"},{"id":"56b003d1-27ed-4314-8590-9a0f1c8d586a","type":"ResetTool"},{"id":"edf40e15-96f0-4c55-a6be-ac0853ec3740","type":"HelpTool"}]},"id":"425bd997-6d61-451d-893f-4417969abe8d","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bce5ffa6-f772-4457-a308-87671c2b4def","type":"Rect"},{"attributes":{"plot":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"}},"id":"1480009d-8238-4cc1-a511-ec66a9007c28","type":"WheelZoomTool"},{"attributes":{},"id":"d4c70483-7372-4333-8471-077669b12944","type":"CategoricalTicker"},{"attributes":{"color_mapper":{"id":"840072b1-5e70-4b2f-8721-9a9df85cffd6","type":"LinearColorMapper"},"formatter":{"id":"7f9fe636-b14e-449a-ab3d-0191f2001fca","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"},"ticker":{"id":"ee4ec805-840c-4eec-a158-4d73600a3fba","type":"BasicTicker"}},"id":"7bda32eb-6a91-4d52-bcb8-11604520a5ca","type":"ColorBar"},{"attributes":{"data_source":{"id":"d45e2ad1-f8a9-4a60-bbbe-c0a204e58275","type":"ColumnDataSource"},"glyph":{"id":"c66663ce-94ba-4ff5-827e-2c092bf18339","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bba12420-4e48-4bbb-86e3-4bdd96e57ae2","type":"GlyphRenderer"},{"attributes":{},"id":"ee4ec805-840c-4eec-a158-4d73600a3fba","type":"BasicTicker"},{"attributes":{},"id":"7f9fe636-b14e-449a-ab3d-0191f2001fca","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"}},"id":"edf40e15-96f0-4c55-a6be-ac0853ec3740","type":"HelpTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"fa9a59d5-7bd2-4db2-9c4e-e629a1cdfd95","type":"LinearAxis"}],"left":[{"id":"a3596579-2c63-4494-b552-71adbfe21770","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"8d045032-d8c3-405b-8de7-a68890321a49","type":"BoxAnnotation"},{"id":"43db9a10-812e-4664-adfb-c0414c17078d","type":"GlyphRenderer"},{"id":"bba12420-4e48-4bbb-86e3-4bdd96e57ae2","type":"GlyphRenderer"},{"id":"fa9a59d5-7bd2-4db2-9c4e-e629a1cdfd95","type":"LinearAxis"},{"id":"a3596579-2c63-4494-b552-71adbfe21770","type":"CategoricalAxis"},{"id":"7bda32eb-6a91-4d52-bcb8-11604520a5ca","type":"ColorBar"}],"right":[{"id":"7bda32eb-6a91-4d52-bcb8-11604520a5ca","type":"ColorBar"}],"title":{"id":"3d2eeca9-06f8-4e4e-a7b0-d62537c872f1","type":"Title"},"tool_events":{"id":"b1d00f2e-67a7-4115-b5cd-af4734e7288f","type":"ToolEvents"},"toolbar":{"id":"32dc182f-1be8-4f07-b766-34272c6bc417","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"93c8468b-e75f-4e56-b027-d1b20a8f808e","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"39c66b35-4e2d-4c08-9d43-d5197bed5fee","type":"FactorRange"}},"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"}},"id":"56b003d1-27ed-4314-8590-9a0f1c8d586a","type":"ResetTool"},{"attributes":{},"id":"29a0a047-3f65-4041-9151-b571ab99fff0","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"}},"id":"bb2b3e9d-a186-4708-9b07-49f14c4618b0","type":"PanTool"},{"attributes":{"overlay":{"id":"8d045032-d8c3-405b-8de7-a68890321a49","type":"BoxAnnotation"},"plot":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"}},"id":"bd243dae-089e-45f0-9978-0f1380e2b03a","type":"BoxZoomTool"},{"attributes":{},"id":"3568fe2a-1c04-471c-b4e7-cec2db3fbe9b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[8.4, 10.5]","[8.4, 10.5]"],"chart_index":[{"POS_ARR_DELAY":"[8.4, 10.5]"},{"POS_ARR_DELAY":"[8.4, 10.5]"}],"values":[8.444444444444445,8.666666666666666],"x":[9,12],"y":["Saturday","Saturday"]}},"id":"495d7da0-61ad-4741-9a50-99790d215bbe","type":"ColumnDataSource"},{"attributes":{},"id":"41591563-ddda-4b65-997c-5eac71a2ffb4","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"3d2eeca9-06f8-4e4e-a7b0-d62537c872f1","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a79a5d81-274f-4954-a936-42cdbfa373b8","type":"BoxAnnotation"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"29a0a047-3f65-4041-9151-b571ab99fff0","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"},"ticker":{"id":"da063343-4f82-4487-8aeb-3ea634e5ca79","type":"CategoricalTicker"}},"id":"a3596579-2c63-4494-b552-71adbfe21770","type":"CategoricalAxis"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"357e1cc0-d16c-444c-943b-03b6981684b1","type":"BasicTickFormatter"},"plot":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"},"ticker":{"id":"9edf0147-34cd-43f0-9309-1b6e4c4d98dd","type":"BasicTicker"}},"id":"fa9a59d5-7bd2-4db2-9c4e-e629a1cdfd95","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8d045032-d8c3-405b-8de7-a68890321a49","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24.6, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(24.6, 26.7]"}],"values":[26.666666666666668],"x":[20],"y":["Saturday"]}},"id":"871a8181-6edd-4940-a845-9b15a7c21d55","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"1edef259-abb7-4efb-a30e-60c3c1bce1ee","type":"Panel"},{"id":"670170d1-8fed-4781-93b7-9b5ca759fb0c","type":"Panel"}]},"id":"9e053ece-a88f-4a84-8ef2-a92a9ea4ca68","type":"Tabs"},{"attributes":{},"id":"dbb695c8-5e4f-45cb-86bb-966794865b33","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1cfb8d78-b32a-4460-87f7-f07df87982c8","type":"ToolEvents"},{"attributes":{"child":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"670170d1-8fed-4781-93b7-9b5ca759fb0c","type":"Panel"},{"attributes":{"callback":null,"end":23},"id":"92fe3233-9a3c-49a0-8bbf-f26ff5e62a01","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"10f11037-a217-475c-98be-0689687bfb5c","type":"PanTool"},{"id":"a267d2e8-735d-4b52-9c49-982873561533","type":"WheelZoomTool"},{"id":"bd243dae-089e-45f0-9978-0f1380e2b03a","type":"BoxZoomTool"},{"id":"0237304b-f6ee-4967-947e-3975836fd45a","type":"SaveTool"},{"id":"700a27d8-e2bb-4f3e-bed8-648c4da61593","type":"ResetTool"},{"id":"140e8c9c-b2da-4709-946d-94d8d35d9fae","type":"HelpTool"}]},"id":"32dc182f-1be8-4f07-b766-34272c6bc417","type":"Toolbar"},{"attributes":{"plot":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"}},"id":"140e8c9c-b2da-4709-946d-94d8d35d9fae","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"840072b1-5e70-4b2f-8721-9a9df85cffd6","type":"LinearColorMapper"},{"attributes":{},"id":"b1d00f2e-67a7-4115-b5cd-af4734e7288f","type":"ToolEvents"},{"attributes":{"data_source":{"id":"bc18ec76-3c29-4bb0-806b-533eedcf5e41","type":"ColumnDataSource"},"glyph":{"id":"bce5ffa6-f772-4457-a308-87671c2b4def","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"555dfbc1-a9a9-456e-aad6-0c665e031b3e","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b30973f6-fb0d-4029-ac8d-34dd281ab9bd","type":"Rect"},{"attributes":{},"id":"357e1cc0-d16c-444c-943b-03b6981684b1","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"93c8468b-e75f-4e56-b027-d1b20a8f808e","type":"Range1d"},{"attributes":{},"id":"eacea6ef-edda-4241-8d8e-b843c16fe236","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c66663ce-94ba-4ff5-827e-2c092bf18339","type":"Rect"},{"attributes":{},"id":"9edf0147-34cd-43f0-9309-1b6e4c4d98dd","type":"BasicTicker"},{"attributes":{"overlay":{"id":"a79a5d81-274f-4954-a936-42cdbfa373b8","type":"BoxAnnotation"},"plot":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"}},"id":"1a32f9e4-9da0-449a-b99b-22e62d1bcd0d","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[8.4, 10.5]","[8.4, 10.5]"],"chart_index":[{"POS_ARR_DELAY":"[8.4, 10.5]"},{"POS_ARR_DELAY":"[8.4, 10.5]"}],"values":[8.444444444444445,8.666666666666666],"x":[9,12],"y":["Saturday","Saturday"]}},"id":"d45e2ad1-f8a9-4a60-bbbe-c0a204e58275","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"}},"id":"9b60a652-df36-4614-971c-fdd5b8d05750","type":"SaveTool"},{"attributes":{"color_mapper":{"id":"463163f5-ac9d-465b-89d2-8f0664ec77b4","type":"LinearColorMapper"},"formatter":{"id":"41591563-ddda-4b65-997c-5eac71a2ffb4","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"},"ticker":{"id":"34cb926d-6bd2-42dc-aa32-12d5b2f8437e","type":"BasicTicker"}},"id":"71ddf558-c2b5-4568-a6fe-86624c7942a4","type":"ColorBar"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"78bda297-10c8-456c-96f6-0f2d974e64b5","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ccd5c442-afba-460a-8143-753bfd5410f3","type":"Rect"},{"attributes":{"plot":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"}},"id":"700a27d8-e2bb-4f3e-bed8-648c4da61593","type":"ResetTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"3568fe2a-1c04-471c-b4e7-cec2db3fbe9b","type":"BasicTickFormatter"},"plot":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"},"ticker":{"id":"eacea6ef-edda-4241-8d8e-b843c16fe236","type":"BasicTicker"}},"id":"410ef721-c345-4d88-90dc-15114ef4eae5","type":"LinearAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"410ef721-c345-4d88-90dc-15114ef4eae5","type":"LinearAxis"}],"left":[{"id":"f8600677-108a-47e2-825f-2140b7046c8a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"a79a5d81-274f-4954-a936-42cdbfa373b8","type":"BoxAnnotation"},{"id":"555dfbc1-a9a9-456e-aad6-0c665e031b3e","type":"GlyphRenderer"},{"id":"6c5b2628-9c75-449c-a8e1-49df75d4911e","type":"GlyphRenderer"},{"id":"410ef721-c345-4d88-90dc-15114ef4eae5","type":"LinearAxis"},{"id":"f8600677-108a-47e2-825f-2140b7046c8a","type":"CategoricalAxis"},{"id":"71ddf558-c2b5-4568-a6fe-86624c7942a4","type":"ColorBar"}],"right":[{"id":"71ddf558-c2b5-4568-a6fe-86624c7942a4","type":"ColorBar"}],"title":{"id":"78bda297-10c8-456c-96f6-0f2d974e64b5","type":"Title"},"tool_events":{"id":"1cfb8d78-b32a-4460-87f7-f07df87982c8","type":"ToolEvents"},"toolbar":{"id":"425bd997-6d61-451d-893f-4417969abe8d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"92fe3233-9a3c-49a0-8bbf-f26ff5e62a01","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a6720780-081a-4f7c-827f-1acf38dc0911","type":"FactorRange"}},"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"},{"attributes":{"child":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"1edef259-abb7-4efb-a30e-60c3c1bce1ee","type":"Panel"},{"attributes":{"plot":{"id":"73ad80f2-a07b-4dbd-9f3a-130e92f5db37","subtype":"Chart","type":"Plot"}},"id":"a267d2e8-735d-4b52-9c49-982873561533","type":"WheelZoomTool"},{"attributes":{"callback":null,"factors":["Saturday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"]},"id":"39c66b35-4e2d-4c08-9d43-d5197bed5fee","type":"FactorRange"},{"attributes":{"data_source":{"id":"495d7da0-61ad-4741-9a50-99790d215bbe","type":"ColumnDataSource"},"glyph":{"id":"b30973f6-fb0d-4029-ac8d-34dd281ab9bd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6c5b2628-9c75-449c-a8e1-49df75d4911e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"871a8181-6edd-4940-a845-9b15a7c21d55","type":"ColumnDataSource"},"glyph":{"id":"ccd5c442-afba-460a-8143-753bfd5410f3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"43db9a10-812e-4664-adfb-c0414c17078d","type":"GlyphRenderer"},{"attributes":{},"id":"34cb926d-6bd2-42dc-aa32-12d5b2f8437e","type":"BasicTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"dbb695c8-5e4f-45cb-86bb-966794865b33","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"875f9683-e0eb-40e1-80a5-59cf31b9f271","subtype":"Chart","type":"Plot"},"ticker":{"id":"d4c70483-7372-4333-8471-077669b12944","type":"CategoricalTicker"}},"id":"f8600677-108a-47e2-825f-2140b7046c8a","type":"CategoricalAxis"}],"root_ids":["9e053ece-a88f-4a84-8ef2-a92a9ea4ca68"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"8b5fe3dc-eace-4d50-9543-ddeeb69e0db3","elementid":"bc816fbd-1b4e-4f40-aea9-c47b141043e8","modelid":"9e053ece-a88f-4a84-8ef2-a92a9ea4ca68"}];
                  
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