/**
 * Created by Ben Ari on 25/02/2015.
 */

var pieHowMuchInClass = new d3pie("howManyInClassChart", {

    "size": {
        "canvasHeight": 300,
        "canvasWidth": 400,
        "pieOuterRadius": "100%"
    },
    "data": {
        "sortOrder": "value-desc",
        "smallSegmentGrouping": {
            "enabled": true,
            "value": 0.4,
            "color": "#FFFFFF"
        },
        "content": [
            {
                "label": "בנים",
                "value": 52,
                "color": "#FFFFFF"
            },
            {
                "label": "בנות",
                "value": 48,
                "color": "#000000"
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
            "color":"#929191",
            "fontSize": 17
        },
        "percentage": {
            "color": "#929191",
            "fontSize": 17,
            "decimalPlaces": null
        },
        "value": {
            "color": "#FFFFFF",
            "fontSize": 28,
            "decimalPlaces": 5
        },
        "lines": {
            "enabled": true
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
            "segmentStroke": "#FFFFFF"
        },
        "gradient": {
            "enabled": false    ,
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


