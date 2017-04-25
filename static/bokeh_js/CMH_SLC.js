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
      };var element = document.getElementById("477c6539-2978-48ad-ba41-63ce441fe754");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '477c6539-2978-48ad-ba41-63ce441fe754' but no matching script tag was found. ")
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
                  var docs_json = {"c86fbf3b-2add-4168-82bc-51f81a4a4ccd":{"roots":{"references":[{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"d82b4b7b-11be-4422-b935-b12e6e8acb65","type":"LinearAxis"}],"left":[{"id":"9d7c175a-df63-4bcc-8108-d63f31ca27be","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"fedccada-eb39-40e4-b8e6-146a860b8b48","type":"BoxAnnotation"},{"id":"3ab8feb3-0f78-4895-9c6f-236904506d0a","type":"GlyphRenderer"},{"id":"54153549-a829-4c6f-8ae0-0cfcb52e4661","type":"GlyphRenderer"},{"id":"d82b4b7b-11be-4422-b935-b12e6e8acb65","type":"LinearAxis"},{"id":"9d7c175a-df63-4bcc-8108-d63f31ca27be","type":"CategoricalAxis"},{"id":"109d99fa-1874-4937-98bc-cca34cffe9b4","type":"ColorBar"}],"right":[{"id":"109d99fa-1874-4937-98bc-cca34cffe9b4","type":"ColorBar"}],"title":{"id":"ceed2e14-8c48-4539-ba26-469e53ba69a5","type":"Title"},"tool_events":{"id":"2de925f2-a7c4-4aff-9516-4e1028704848","type":"ToolEvents"},"toolbar":{"id":"f6b1e4f7-9065-4aa6-8d66-09dbd3017c11","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"aae023f1-e71f-490f-9489-e5d11b247443","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0e3c88e0-8d3e-4a9a-9d0e-4f3dd2a2fb7c","type":"FactorRange"}},"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"2dfe8a89-2bca-455c-b892-c25fdbfdaeb4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a1f75863-ea93-42f5-aad5-49590ec37e94","type":"ColumnDataSource"},"glyph":{"id":"5ede759b-05e8-499d-81cd-fbda1fcd4072","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"54153549-a829-4c6f-8ae0-0cfcb52e4661","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"6a3a459c-603e-406a-bfbc-35021b9636fd","type":"BasicTickFormatter"},"plot":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"},"ticker":{"id":"49a8afb7-b6b3-4ef6-aa6b-2669f822b143","type":"BasicTicker"}},"id":"d82b4b7b-11be-4422-b935-b12e6e8acb65","type":"LinearAxis"},{"attributes":{"plot":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"}},"id":"6c539a53-10cc-4384-a6d3-c6c004c2747b","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[3, 5.2]"],"chart_index":[{"POS_ARR_DELAY":"[3, 5.2]"}],"values":[3.0],"x":[18],"y":["Sunday"]}},"id":"a1f75863-ea93-42f5-aad5-49590ec37e94","type":"ColumnDataSource"},{"attributes":{},"id":"0e6ad2a2-9c62-4b3a-b463-44b3ca6b03f0","type":"BasicTickFormatter"},{"attributes":{},"id":"cf8daf15-429f-4ffc-9a87-0b2d9df72f80","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"455b122f-322d-42d5-b0c3-387fa0d498f0","type":"Rect"},{"attributes":{"plot":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"}},"id":"d8ac58ed-6b49-4b9a-848f-23a45f3662ae","type":"ResetTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"ceed2e14-8c48-4539-ba26-469e53ba69a5","type":"Title"},{"attributes":{"overlay":{"id":"9473fbac-8192-4528-985c-9ae30b06b6df","type":"BoxAnnotation"},"plot":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"}},"id":"fdead686-99e9-43ca-bb3c-b1cda8317b44","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"}},"id":"a2b1b1a7-8792-43fb-87a2-ea757c00519f","type":"ResetTool"},{"attributes":{},"id":"2d0cde2b-850f-4f6c-84d4-a411d2a91f69","type":"CategoricalTickFormatter"},{"attributes":{"color_mapper":{"id":"22404ca0-1b41-4ba3-a34e-ff5bcebb11f2","type":"LinearColorMapper"},"formatter":{"id":"64b17657-9334-4427-b265-5c81374d3081","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"},"ticker":{"id":"b7214680-461a-47a8-b993-266f37356672","type":"BasicTicker"}},"id":"109d99fa-1874-4937-98bc-cca34cffe9b4","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a12f427-f520-4458-aeec-8ba114140d2c","type":"Rect"},{"attributes":{"data_source":{"id":"78c00c3b-f24c-4710-b244-10ea2dc2f157","type":"ColumnDataSource"},"glyph":{"id":"6a12f427-f520-4458-aeec-8ba114140d2c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5f86aba8-6a7f-4493-8c09-51ad1152cc4e","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5ede759b-05e8-499d-81cd-fbda1fcd4072","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9473fbac-8192-4528-985c-9ae30b06b6df","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[3, 5.2]"],"chart_index":[{"POS_ARR_DELAY":"[3, 5.2]"}],"values":[3.0],"x":[18],"y":["Sunday"]}},"id":"3647d262-c0a6-4e10-81e2-971dc0ab71a7","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"111f8ea5-3155-41fc-a8ff-45a3b5e2dc52","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"},"ticker":{"id":"a2cabf93-6c38-477b-a6b8-e5fc40eb483d","type":"CategoricalTicker"}},"id":"9d7c175a-df63-4bcc-8108-d63f31ca27be","type":"CategoricalAxis"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"516d3f33-3e19-499d-890f-5d4d52ca86f7","type":"LinearColorMapper"},{"attributes":{},"id":"2de925f2-a7c4-4aff-9516-4e1028704848","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"5f8b9d2c-c5e2-4fd7-9394-75008bb6efdb","type":"Title"},{"attributes":{"callback":null,"end":23},"id":"aae023f1-e71f-490f-9489-e5d11b247443","type":"Range1d"},{"attributes":{},"id":"b7214680-461a-47a8-b993-266f37356672","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6c539a53-10cc-4384-a6d3-c6c004c2747b","type":"PanTool"},{"id":"447e5547-dce6-482c-aea8-399f0c022add","type":"WheelZoomTool"},{"id":"fdead686-99e9-43ca-bb3c-b1cda8317b44","type":"BoxZoomTool"},{"id":"15ae7251-48e5-46f0-a076-dfde47bab3fe","type":"SaveTool"},{"id":"d8ac58ed-6b49-4b9a-848f-23a45f3662ae","type":"ResetTool"},{"id":"56503827-5f74-4630-b885-e1e9a0f354de","type":"HelpTool"}]},"id":"ddc539d1-7101-4f9b-9b1c-851da9bc7693","type":"Toolbar"},{"attributes":{"plot":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"}},"id":"43058aea-bab5-494f-a1e3-620fb7d556a3","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5167b9d2-1bd8-4b27-ab0d-80f7316f57c8","type":"Rect"},{"attributes":{},"id":"02af61a6-314e-4d18-a67c-adb0f1513315","type":"CategoricalTicker"},{"attributes":{},"id":"64b17657-9334-4427-b265-5c81374d3081","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fedccada-eb39-40e4-b8e6-146a860b8b48","type":"BoxAnnotation"},{"attributes":{},"id":"49a8afb7-b6b3-4ef6-aa6b-2669f822b143","type":"BasicTicker"},{"attributes":{},"id":"9574beb2-9c66-4dc7-ad22-2afe92d52200","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f3ac2726-aa83-49c2-80eb-1a698210ef68","type":"ColumnDataSource"},"glyph":{"id":"455b122f-322d-42d5-b0c3-387fa0d498f0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3ab8feb3-0f78-4895-9c6f-236904506d0a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"}},"id":"d209d4d6-c2c2-4d06-9f5f-e29a2335ae62","type":"SaveTool"},{"attributes":{},"id":"6a3a459c-603e-406a-bfbc-35021b9636fd","type":"BasicTickFormatter"},{"attributes":{},"id":"322a725b-586f-443e-b4e3-759125d8c3fa","type":"ToolEvents"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2dfe8a89-2bca-455c-b892-c25fdbfdaeb4","type":"BasicTickFormatter"},"plot":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"},"ticker":{"id":"cf8daf15-429f-4ffc-9a87-0b2d9df72f80","type":"BasicTicker"}},"id":"6f10d9b6-1287-4af1-8141-645914613d9c","type":"LinearAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"6f10d9b6-1287-4af1-8141-645914613d9c","type":"LinearAxis"}],"left":[{"id":"dd4246b0-1704-4fe7-a2ea-402aee4dce70","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"9473fbac-8192-4528-985c-9ae30b06b6df","type":"BoxAnnotation"},{"id":"5f86aba8-6a7f-4493-8c09-51ad1152cc4e","type":"GlyphRenderer"},{"id":"521155b3-8c18-45d2-bc81-d72db087629b","type":"GlyphRenderer"},{"id":"6f10d9b6-1287-4af1-8141-645914613d9c","type":"LinearAxis"},{"id":"dd4246b0-1704-4fe7-a2ea-402aee4dce70","type":"CategoricalAxis"},{"id":"fe118ba8-386e-4a20-a6a4-4916d3980472","type":"ColorBar"}],"right":[{"id":"fe118ba8-386e-4a20-a6a4-4916d3980472","type":"ColorBar"}],"title":{"id":"5f8b9d2c-c5e2-4fd7-9394-75008bb6efdb","type":"Title"},"tool_events":{"id":"322a725b-586f-443e-b4e3-759125d8c3fa","type":"ToolEvents"},"toolbar":{"id":"ddc539d1-7101-4f9b-9b1c-851da9bc7693","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"79b74b8a-fec1-400a-b3cc-26761c9c358a","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"928e9c34-278e-4f26-b30d-6fbfb93b30a0","type":"FactorRange"}},"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"tabs":[{"id":"fce8c524-8fe7-46ee-8354-277edcdb28ee","type":"Panel"},{"id":"07321478-8435-4c96-8668-a986fcb41786","type":"Panel"}]},"id":"cadd0964-7538-46e9-b61d-977bdf938d3c","type":"Tabs"},{"attributes":{"plot":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"}},"id":"15ae7251-48e5-46f0-a076-dfde47bab3fe","type":"SaveTool"},{"attributes":{"plot":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"}},"id":"1e668b64-db1d-4277-8088-60b142726fa8","type":"HelpTool"},{"attributes":{"plot":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"}},"id":"b6f8397d-fa1e-4b24-b734-92381e923239","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20.8, 23]"],"chart_index":[{"POS_ARR_DELAY":"(20.8, 23]"}],"values":[23.0],"x":[20],"y":["Sunday"]}},"id":"f3ac2726-aa83-49c2-80eb-1a698210ef68","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"516d3f33-3e19-499d-890f-5d4d52ca86f7","type":"LinearColorMapper"},"formatter":{"id":"0e6ad2a2-9c62-4b3a-b463-44b3ca6b03f0","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"},"ticker":{"id":"9574beb2-9c66-4dc7-ad22-2afe92d52200","type":"BasicTicker"}},"id":"fe118ba8-386e-4a20-a6a4-4916d3980472","type":"ColorBar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"2d0cde2b-850f-4f6c-84d4-a411d2a91f69","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"},"ticker":{"id":"02af61a6-314e-4d18-a67c-adb0f1513315","type":"CategoricalTicker"}},"id":"dd4246b0-1704-4fe7-a2ea-402aee4dce70","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"}},"id":"447e5547-dce6-482c-aea8-399f0c022add","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":23},"id":"79b74b8a-fec1-400a-b3cc-26761c9c358a","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"43058aea-bab5-494f-a1e3-620fb7d556a3","type":"PanTool"},{"id":"b6f8397d-fa1e-4b24-b734-92381e923239","type":"WheelZoomTool"},{"id":"e7e4bc63-ee2c-40fa-93e4-c0f01382f5e1","type":"BoxZoomTool"},{"id":"d209d4d6-c2c2-4d06-9f5f-e29a2335ae62","type":"SaveTool"},{"id":"a2b1b1a7-8792-43fb-87a2-ea757c00519f","type":"ResetTool"},{"id":"1e668b64-db1d-4277-8088-60b142726fa8","type":"HelpTool"}]},"id":"f6b1e4f7-9065-4aa6-8d66-09dbd3017c11","type":"Toolbar"},{"attributes":{"data_source":{"id":"3647d262-c0a6-4e10-81e2-971dc0ab71a7","type":"ColumnDataSource"},"glyph":{"id":"5167b9d2-1bd8-4b27-ab0d-80f7316f57c8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"521155b3-8c18-45d2-bc81-d72db087629b","type":"GlyphRenderer"},{"attributes":{},"id":"a2cabf93-6c38-477b-a6b8-e5fc40eb483d","type":"CategoricalTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"22404ca0-1b41-4ba3-a34e-ff5bcebb11f2","type":"LinearColorMapper"},{"attributes":{"child":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"07321478-8435-4c96-8668-a986fcb41786","type":"Panel"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"928e9c34-278e-4f26-b30d-6fbfb93b30a0","type":"FactorRange"},{"attributes":{},"id":"111f8ea5-3155-41fc-a8ff-45a3b5e2dc52","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"0e3c88e0-8d3e-4a9a-9d0e-4f3dd2a2fb7c","type":"FactorRange"},{"attributes":{"overlay":{"id":"fedccada-eb39-40e4-b8e6-146a860b8b48","type":"BoxAnnotation"},"plot":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"}},"id":"e7e4bc63-ee2c-40fa-93e4-c0f01382f5e1","type":"BoxZoomTool"},{"attributes":{"child":{"id":"36562935-a62a-40c8-8e51-4f8b907646af","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"fce8c524-8fe7-46ee-8354-277edcdb28ee","type":"Panel"},{"attributes":{"plot":{"id":"e55a9e99-d56a-401d-8a86-b5279057d022","subtype":"Chart","type":"Plot"}},"id":"56503827-5f74-4630-b885-e1e9a0f354de","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20.8, 23]"],"chart_index":[{"POS_ARR_DELAY":"(20.8, 23]"}],"values":[23.0],"x":[20],"y":["Sunday"]}},"id":"78c00c3b-f24c-4710-b244-10ea2dc2f157","type":"ColumnDataSource"}],"root_ids":["cadd0964-7538-46e9-b61d-977bdf938d3c"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"c86fbf3b-2add-4168-82bc-51f81a4a4ccd","elementid":"477c6539-2978-48ad-ba41-63ce441fe754","modelid":"cadd0964-7538-46e9-b61d-977bdf938d3c"}];
                  
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