var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "51"
                        },
                        "/General": {
                            "history": "#111214,#001811,#c0ffea,#dadada,#111214"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.colorpicker",
                    "title": "Color Picker"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1366x768": "Applet-86:1135.65,592,160,112,0;",
                    "ItemGeometriesHorizontal": "Applet-86:1135.65,592,160,112,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "a2n.blur"
                },
                "/ConfigDialog": {
                    "DialogHeight": "630",
                    "DialogWidth": "741"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "bottom",
                    "ToolBoxButtonX": "304",
                    "ToolBoxButtonY": "687",
                    "arrangement": "1",
                    "filterMimeTypes": "\\0",
                    "iconSize": "1",
                    "positions": "{\"1366x768\":[]}",
                    "sortMode": "-1",
                    "textLines": "3"
                },
                "/Wallpaper/a2n.blur/General": {
                    "BlurRadius": "50",
                    "Image": "/home/mantacid/.local/share/wallpapers/minimalist-abstract-Theme-HD-Wallpaper-Wallpaper-1280x800-10wallpaper.com.jpg",
                    "PreviewImage": "",
                    "SlidePaths": "/home/mantacid/.local/share/wallpapers/,/usr/share/wallpapers/"
                },
                "/Wallpaper/com.github.zren.animatedhue/General": {
                    "FillMode": "2",
                    "Image": "file:///home/mantacid/.local/share/wallpapers/gradient-background-7680x4320-11027.jpg"
                },
                "/Wallpaper/com.github.zren.inactiveblur/General": {
                    "FillMode": "2",
                    "Image": "/usr/share/wallpapers/DarkestHour/",
                    "SlideInterval": "900",
                    "SlidePaths": "/usr/share/wallpapers"
                },
                "/Wallpaper/online.knowmad.shaderwallpaper/General": {
                    "SelectedShader": "./Shader/Shader_Waves2.qml"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "33,33,33"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Color": "invalid",
                    "Image": "/home/mantacid/.local/share/wallpapers/yosemite-low-poly.jpg",
                    "SlideInterval": "600",
                    "SlidePaths": "/home/mantacid/.local/share/wallpapers/\\,/usr/share/wallpapers/",
                    "UncheckedSlides": "/usr/share/wallpapers/FallenLeaf/\\,/usr/share/wallpapers/Flow/\\,/usr/share/wallpapers/FlyingKonqui/\\,/usr/share/wallpapers/Grey/\\,/usr/share/wallpapers/IceCold/\\,/usr/share/wallpapers/Honeywave/\\,/usr/share/wallpapers/Kite/\\,/usr/share/wallpapers/Kay/\\,/usr/share/wallpapers/Kokkini/\\,/usr/share/wallpapers/OneStandsOut/\\,/usr/share/wallpapers/PastelHills/\\,/usr/share/wallpapers/Opal/\\,/usr/share/wallpapers/Path/\\,/usr/share/wallpapers/Shell/\\,/usr/share/wallpapers/Volna/\\,/home/mantacid/.local/share/wallpapers/Deepin-Wallapaper/cristina-gottardi-wndpWTiDuT0-unsplash.jpg\\,/usr/share/wallpapers/Altai/\\,/usr/share/wallpapers/Autumn/\\,/usr/share/wallpapers/Canopee/\\,/usr/share/wallpapers/Cascade/\\,/usr/share/wallpapers/Cluster/\\,/usr/share/wallpapers/EveningGlow/\\,/usr/share/wallpapers/ColdRipple/\\,/usr/share/wallpapers/MilkyWay/\\,/home/mantacid/.local/share/wallpapers/Arch/\\,/home/mantacid/.local/share/wallpapers/ArchGrass/\\,/home/mantacid/.local/share/wallpapers/ArchPerspective/\\,/home/mantacid/.local/share/wallpapers/ArchLiquid/\\,/home/mantacid/.local/share/wallpapers/ArchBlueLiquid/\\,/usr/share/wallpapers/ColorfulCups/\\,/usr/share/wallpapers/SafeLanding/\\,/home/mantacid/.local/share/wallpapers/Nova-Pengi/"
                },
                "/Wallpaper/org.kde.potd/General": {
                    "FillMode": "2"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///home/mantacid/.local/share/wallpapers/Nebula-Space-Stars-2019-Digital-Universe-Wallpaper-1920x1080-10wallpaper.com.jpg",
                    "SlideInterval": "600",
                    "SlidePaths": "/home/mantacid/.local/share/wallpapers/,/usr/share/wallpapers/",
                    "UncheckedSlides": "/usr/share/wallpapers/FallenLeaf/,/usr/share/wallpapers/Flow/,/usr/share/wallpapers/FlyingKonqui/,/usr/share/wallpapers/Grey/,/usr/share/wallpapers/IceCold/,/usr/share/wallpapers/Honeywave/,/usr/share/wallpapers/Kite/,/usr/share/wallpapers/Kay/,/usr/share/wallpapers/Kokkini/,/usr/share/wallpapers/OneStandsOut/,/usr/share/wallpapers/PastelHills/,/usr/share/wallpapers/Opal/,/usr/share/wallpapers/Path/,/usr/share/wallpapers/Shell/,/usr/share/wallpapers/Volna/,/home/mantacid/.local/share/wallpapers/Deepin-Wallapaper/cristina-gottardi-wndpWTiDuT0-unsplash.jpg,/usr/share/wallpapers/Altai/,/usr/share/wallpapers/Autumn/,/usr/share/wallpapers/Canopee/,/usr/share/wallpapers/Cascade/,/usr/share/wallpapers/Cluster/,/usr/share/wallpapers/EveningGlow/,/usr/share/wallpapers/ColdRipple/,/usr/share/wallpapers/MilkyWay/,/home/mantacid/.local/share/wallpapers/Arch/,/home/mantacid/.local/share/wallpapers/ArchGrass/,/home/mantacid/.local/share/wallpapers/ArchPerspective/,/home/mantacid/.local/share/wallpapers/ArchLiquid/,/home/mantacid/.local/share/wallpapers/ArchBlueLiquid/,/usr/share/wallpapers/ColorfulCups/,/usr/share/wallpapers/SafeLanding/,/home/mantacid/.local/share/wallpapers/Nova-Pengi/"
                }
            },
            "wallpaperPlugin": "a2n.blur"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "26"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "638",
                            "popupWidth": "782"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "600",
                            "DialogWidth": "800"
                        },
                        "/General": {
                            "customButtonImage": "/usr/share/icons/artix/logo.svg",
                            "favoritesPortedToKAstats": "true",
                            "icon": "distributor-logo-artix",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown",
                            "tileModel": "W3sieCI6MiwieSI6MSwidyI6MiwiaCI6MiwidXJsIjoicHJlZmVycmVkOi8vYnJvd3NlciIsImJhY2tncm91bmRDb2xvciI6IiMxODE5MWIifSx7IngiOjEsInkiOjEsInciOjEsImgiOjEsInVybCI6Im1kLm9ic2lkaWFuLk9ic2lkaWFuLmRlc2t0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjMTgxOTFiIn0seyJ4IjowLCJ5IjoxLCJ3IjoxLCJoIjoxLCJ1cmwiOiJvcmcua2RlLmthdGUuZGVza3RvcCIsImJhY2tncm91bmRDb2xvciI6IiMxODE5MWIifSx7IngiOjEsInkiOjYsInciOjEsImgiOjEsInVybCI6Im9yZy5rZGUua3N5c2d1YXJkLmRlc2t0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjMTgxOTFiIn0seyJ4IjozLCJ5Ijo0LCJ3IjoxLCJoIjoxLCJ1cmwiOiJjb20uZ2l0aHViLnRoZW1peF9wcm9qZWN0Lk9vbW94LmRlc2t0b3AiLCJsYWJlbCI6IlRoZW1lciIsImJhY2tncm91bmRDb2xvciI6IiMxODE5MWIifSx7IngiOjEsInkiOjIsInciOjEsImgiOjEsInVybCI6Im9yZy5rZGUuZG9scGhpbi5kZXNrdG9wIiwiYmFja2dyb3VuZENvbG9yIjoiIzE4MTkxYiJ9LHsieCI6MCwieSI6NCwidyI6MiwiaCI6MiwidXJsIjoib3JnLmtkZS5rb25zb2xlLmRlc2t0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjMTgxOTFiIn0seyJ4IjoyLCJ5Ijo0LCJ3IjoxLCJoIjoxLCJ1cmwiOiJzeXN0ZW1zZXR0aW5ncy5kZXNrdG9wIiwiYmFja2dyb3VuZENvbG9yIjoiIzE4MTkxYiJ9LHsieCI6MCwieSI6MCwidyI6MiwiaCI6MSwidXJsIjoiIiwidGlsZVR5cGUiOiJncm91cCIsImxhYmVsIjoiRE9DVU1FTlRTIiwiYmFja2dyb3VuZENvbG9yIjoiIzE4MTkxYiJ9LHsieCI6MiwieSI6MCwidyI6NCwiaCI6MSwidXJsIjoiIiwidGlsZVR5cGUiOiJncm91cCIsImxhYmVsIjoiSU5URVJORVQiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjMTgxOTFiIn0seyJ4Ijo0LCJ5IjoyLCJ3IjoyLCJoIjoxLCJ1cmwiOiJ0aHVuZGVyYmlyZC5kZXNrdG9wIiwiYmFja2dyb3VuZENvbG9yIjoiIzE4MTkxYiJ9LHsieCI6NCwieSI6MSwidyI6MiwiaCI6MSwidXJsIjoiVG9yIEJyb3dzZXItMi5kZXNrdG9wIiwiYmFja2dyb3VuZENvbG9yIjoiIzE4MTkxYiJ9LHsieCI6MCwieSI6MywidyI6MywiaCI6MSwidXJsIjoiIiwidGlsZVR5cGUiOiJncm91cCIsImxhYmVsIjoiU1lTVEVNIiwiYmFja2dyb3VuZENvbG9yIjoiIzE4MTkxYiJ9LHsieCI6MCwieSI6MiwidyI6MSwiaCI6MSwidXJsIjoib3JnLmtkZS5hcmsuZGVza3RvcCIsImJhY2tncm91bmRDb2xvciI6IiMxODE5MWIifSx7IngiOjIsInkiOjUsInciOjEsImgiOjEsInVybCI6Im9yZy5rZGUua2dwZy5kZXNrdG9wIiwiYmFja2dyb3VuZENvbG9yIjoiIzE5MWExYyJ9LHsieCI6MywieSI6NiwidyI6MiwiaCI6MSwidXJsIjoiY29ua3kuZGVza3RvcCIsImJhY2tncm91bmRDb2xvciI6IiMxOTFhMWMifSx7IngiOjIsInkiOjYsInciOjEsImgiOjEsInVybCI6Im9yZy5rZGUucGFydGl0aW9ubWFuYWdlci5kZXNrdG9wIiwiYmFja2dyb3VuZENvbG9yIjoiIzE5MWExYyJ9LHsieCI6NCwieSI6NCwidyI6MiwiaCI6MSwidXJsIjoib3JnLmtkZS5wbGFzbWEubG9va2FuZGZlZWxleHBsb3Jlci5kZXNrdG9wIiwibGFiZWwiOiJUaGVtZSBFeHBsb3JlciIsImJhY2tncm91bmRDb2xvciI6IiMxOTFhMWMifSx7IngiOjAsInkiOjYsInciOjEsImgiOjEsInVybCI6Im9yZy5rZGUua2luZm9jZW50ZXIuZGVza3RvcCIsImJhY2tncm91bmRDb2xvciI6IiMxOTFhMWMifSx7IngiOjUsInkiOjUsInciOjEsImgiOjEsInVybCI6ImRlc2lnbmVyLmRlc2t0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjMTkxYTFjIn0seyJ4IjozLCJ5IjozLCJ3IjozLCJoIjoxLCJ1cmwiOiIiLCJ0aWxlVHlwZSI6Imdyb3VwIiwibGFiZWwiOiJERVZFTE9QTUVOVCIsImJhY2tncm91bmRDb2xvciI6IiMxOTFhMWMifSx7IngiOjMsInkiOjUsInciOjIsImgiOjEsInVybCI6Im9yZy5rZGUucGxhc21hZW5naW5lZXhwbG9yZXIuZGVza3RvcCIsImJhY2tncm91bmRDb2xvciI6IiMxOTFhMWMiLCJsYWJlbCI6IkVuZ2luZSBFeHBsb3JlciJ9LHsieCI6NSwieSI6NiwidyI6MSwiaCI6MSwidXJsIjoicWRidXN2aWV3ZXIuZGVza3RvcCIsImJhY2tncm91bmRDb2xvciI6IiMxOTFhMWMifV0=",
                            "useCustomButtonImage": "true"
                        }
                    },
                    "plugin": "labeled-kickoff"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "18"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "840"
                        },
                        "/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop,applications:org.kde.dolphin.desktop,applications:org.kde.kate.desktop,file:///var/lib/flatpak/exports/share/applications/md.obsidian.Obsidian.desktop,applications:firefox.desktop,applications:thunderbird.desktop",
                            "showOnlyCurrentDesktop": "false",
                            "unhideOnAttention": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "26"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "768",
                    "DialogWidth": "162"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2.8181818181818183,
            "hiding": "normal",
            "location": "left",
            "maximumLength": 31.636363636363637,
            "minimumLength": 31,
            "offset": 1.3181818181818181
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "26"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "840"
                        },
                        "/General": {
                            "showText": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.windowlist"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "18"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "840"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "26"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "26"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "840"
                        },
                        "/General": {
                            "currentDesktopSelected": "ShowDesktop",
                            "showWindowIcons": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "63"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "840"
                        }
                    },
                    "plugin": "org.kde.milou"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "86"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "23"
                        },
                        "/Appearance": {
                            "customDateFormat": "dd/MM/yy",
                            "customSpacing": "0",
                            "dateDisplayFormat": "BelowTime",
                            "dateFormat": "custom",
                            "fixedFont": "true",
                            "fontFamily": "Inconsolata Extra Condensed Light",
                            "fontSize": "25",
                            "showSeconds": "true",
                            "use24hFormat": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "840"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "83",
                    "DialogWidth": "1366"
                },
                "/Configuration": {
                    "PreloadWeight": "18"
                }
            },
            "height": 2.727272727272727,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 61.81818181818182,
            "minimumLength": 61.5,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
