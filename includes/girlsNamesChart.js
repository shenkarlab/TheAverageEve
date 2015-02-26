var pieGirls = new d3pie("pieChartGirls", {

    "size": {
        "canvasHeight": 200,
        "canvasWidth": 200,
        "pieInnerRadius": "90%",
        "pieOuterRadius": "70%"
    },
    "data": {
        "sortOrder": "value-desc",
        "smallSegmentGrouping": {
            "enabled": true,
            "value": 0.4,
            "color": "#acacac"
        },
        "content": [
            {
                "label": "אין העדפה",
                "value": 2.5,
                "color": "#e6e3d9"
            },
            {
                "label": "ורוד",
                "value": 5.3,
                "color": "#eb5fc8"
            },
            {
                "label": "אדום",
                "value": 11.9,
                "color": "#f6363c"
            },
            {
                "label": "כתום",
                "value": 1.8,
                "color": "#ff5d0d"
            },
            {
                "label": "צהוב",
                "value": 2.7,
                "color": "#fffc00"
            },
            {
                "label": "ירוק",
                "value": 27.9,
                "color": "#65ee54"
            },
            {
                "label": "כחול",
                "value": 24.9,
                "color": "#5a8ee6"
            },
            {
                "label": "סגול",
                "value": 12.2,
                "color": "#b77bd7"
            },
            {
                "label": "חום",
                "value": 0.5,
                "color": "#7e4700"
            },
            {
                "label": "אפור",
                "value": 0.02,
                "color": "#d7d1c6"
            },
            {
                "label": "שחור",
                "value": 8.1,
                "color": "#100f10"
            },
            {
                "label": "לבן",
                "value": 2.1,
                "color": "#ffffff"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "none",
            "pieDistance": 15
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 2
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "fontSize": 13,
            "decimalPlaces": null
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        }
    },

    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {value}, {percentage}%",
        "styles": {
            "fadeInSpeed": 379,
            "backgroundColor": "#ffffff",
            "backgroundOpacity": 0,
            "color": "#000000",
            "borderRadius": 4,
            "fontSize": 14,
            "padding": 8
        }
    },
    "effects": {
        "load": {
            "speed": 1100
        },
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 16
        },
        "highlightSegmentOnMouseover": false,
        "highlightLuminosity": 0.99
    },
    "misc": {
        "colors": {
            "segmentStroke": "#ffffff"
        },
        "gradient": {
            "enabled": true,
            "percentage": 100
        },
        "canvasPadding": {
            "top": 1,
            "left": 5
        }
    },
    "callbacks": {
        "onMouseoverSegment":null,
        "onMouseoutSegment":null
    }
});