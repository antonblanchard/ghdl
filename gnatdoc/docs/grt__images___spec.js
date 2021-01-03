GNATdoc.Documentation = {
  "label": "Grt.Images",
  "qualifier": "",
  "summary": [
  ],
  "description": [
    {
      "kind": "paragraph",
      "children": [
        {
          "kind": "span",
          "text": "For all images procedures, the result is allocated on the secondary\n"
        },
        {
          "kind": "span",
          "text": "stack.\n"
        }
      ]
    }
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "Ghdl_Array_Char_To_String_B1",
          "qualifier": "",
          "line": 68,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 68,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Array_Char_To_String_B1",
                      "href": "docs/grt__images___spec.html#L68C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 69,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L69C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 70,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L70C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Ptr",
                      "href": "docs/grt__types___spec.html#L46C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Len",
                      "href": "docs/grt__images___spec.html#L70C23"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Index_Type",
                      "href": "docs/grt__types___spec.html#L47C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L70C46"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 69,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 70,
              "column": 7,
              "type": {
                "label": "Grt.Types.Ghdl_Ptr",
                "docHref": "docs/grt__types___spec.html#L46C9"
              },
              "description": [
              ]
            },
            {
              "label": "Len",
              "line": 70,
              "column": 23,
              "type": {
                "label": "Grt.Types.Ghdl_Index_Type",
                "docHref": "docs/grt__types___spec.html#L47C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 70,
              "column": 46,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Array_Char_To_String_E32",
          "qualifier": "",
          "line": 74,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 74,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Array_Char_To_String_E32",
                      "href": "docs/grt__images___spec.html#L74C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 75,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L75C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 76,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L76C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Ptr",
                      "href": "docs/grt__types___spec.html#L46C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Len",
                      "href": "docs/grt__images___spec.html#L76C23"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Index_Type",
                      "href": "docs/grt__types___spec.html#L47C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L76C46"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 75,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 76,
              "column": 7,
              "type": {
                "label": "Grt.Types.Ghdl_Ptr",
                "docHref": "docs/grt__types___spec.html#L46C9"
              },
              "description": [
              ]
            },
            {
              "label": "Len",
              "line": 76,
              "column": 23,
              "type": {
                "label": "Grt.Types.Ghdl_Index_Type",
                "docHref": "docs/grt__types___spec.html#L47C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 76,
              "column": 46,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Array_Char_To_String_E8",
          "qualifier": "",
          "line": 71,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 71,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Array_Char_To_String_E8",
                      "href": "docs/grt__images___spec.html#L71C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 72,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L72C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 73,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L73C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Ptr",
                      "href": "docs/grt__types___spec.html#L46C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Len",
                      "href": "docs/grt__images___spec.html#L73C23"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Index_Type",
                      "href": "docs/grt__types___spec.html#L47C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L73C46"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 72,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 73,
              "column": 7,
              "type": {
                "label": "Grt.Types.Ghdl_Ptr",
                "docHref": "docs/grt__types___spec.html#L46C9"
              },
              "description": [
              ]
            },
            {
              "label": "Len",
              "line": 73,
              "column": 23,
              "type": {
                "label": "Grt.Types.Ghdl_Index_Type",
                "docHref": "docs/grt__types___spec.html#L47C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 73,
              "column": 46,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_BV_To_Hstring",
          "qualifier": "",
          "line": 81,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 81,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_BV_To_Hstring",
                      "href": "docs/grt__images___spec.html#L81C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L81C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 82,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Base",
                      "href": "docs/grt__images___spec.html#L82C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_Bit_Vector_Basep",
                      "href": "docs/grt__types___spec.html#L103C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 83,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Len",
                      "href": "docs/grt__images___spec.html#L83C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Index_Type",
                      "href": "docs/grt__types___spec.html#L47C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 81,
              "column": 34,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Base",
              "line": 82,
              "column": 34,
              "type": {
                "label": "Grt.Types.Std_Bit_Vector_Basep",
                "docHref": "docs/grt__types___spec.html#L103C9"
              },
              "description": [
              ]
            },
            {
              "label": "Len",
              "line": 83,
              "column": 34,
              "type": {
                "label": "Grt.Types.Ghdl_Index_Type",
                "docHref": "docs/grt__types___spec.html#L47C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_BV_To_Ostring",
          "qualifier": "",
          "line": 78,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 78,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_BV_To_Ostring",
                      "href": "docs/grt__images___spec.html#L78C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L78C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 79,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Base",
                      "href": "docs/grt__images___spec.html#L79C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_Bit_Vector_Basep",
                      "href": "docs/grt__types___spec.html#L103C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 80,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Len",
                      "href": "docs/grt__images___spec.html#L80C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Index_Type",
                      "href": "docs/grt__types___spec.html#L47C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 78,
              "column": 34,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Base",
              "line": 79,
              "column": 34,
              "type": {
                "label": "Grt.Types.Std_Bit_Vector_Basep",
                "docHref": "docs/grt__types___spec.html#L103C9"
              },
              "description": [
              ]
            },
            {
              "label": "Len",
              "line": 80,
              "column": 34,
              "type": {
                "label": "Grt.Types.Ghdl_Index_Type",
                "docHref": "docs/grt__types___spec.html#L47C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Image_B1",
          "qualifier": "",
          "line": 32,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 32,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Image_B1",
                      "href": "docs/grt__images___spec.html#L32C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 33,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L33C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L33C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_B1",
                      "href": "docs/grt__types___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L33C44"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 33,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 33,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_B1",
                "docHref": "docs/grt__types___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 33,
              "column": 44,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Image_E32",
          "qualifier": "",
          "line": 36,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 36,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Image_E32",
                      "href": "docs/grt__images___spec.html#L36C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 37,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L37C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L37C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_E32",
                      "href": "docs/grt__types___spec.html#L37C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L37C45"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 37,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 37,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_E32",
                "docHref": "docs/grt__types___spec.html#L37C12"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 37,
              "column": 45,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Image_E8",
          "qualifier": "",
          "line": 34,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 34,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Image_E8",
                      "href": "docs/grt__images___spec.html#L34C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 35,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L35C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L35C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_E8",
                      "href": "docs/grt__types___spec.html#L35C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L35C44"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 35,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 35,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_E8",
                "docHref": "docs/grt__types___spec.html#L35C12"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 35,
              "column": 44,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Image_F64",
          "qualifier": "",
          "line": 40,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 40,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Image_F64",
                      "href": "docs/grt__images___spec.html#L40C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L40C30"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L40C52"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_F64",
                      "href": "docs/grt__types___spec.html#L41C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 40,
              "column": 30,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 40,
              "column": 52,
              "type": {
                "label": "Grt.Types.Ghdl_F64",
                "docHref": "docs/grt__types___spec.html#L41C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Image_I32",
          "qualifier": "",
          "line": 38,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 38,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Image_I32",
                      "href": "docs/grt__images___spec.html#L38C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L38C30"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L38C52"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_I32",
                      "href": "docs/grt__types___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 38,
              "column": 30,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 38,
              "column": 52,
              "type": {
                "label": "Grt.Types.Ghdl_I32",
                "docHref": "docs/grt__types___spec.html#L38C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Image_I64",
          "qualifier": "",
          "line": 39,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 39,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Image_I64",
                      "href": "docs/grt__images___spec.html#L39C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L39C30"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L39C52"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_I64",
                      "href": "docs/grt__types___spec.html#L39C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 39,
              "column": 30,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 39,
              "column": 52,
              "type": {
                "label": "Grt.Types.Ghdl_I64",
                "docHref": "docs/grt__types___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Image_P32",
          "qualifier": "",
          "line": 43,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 43,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Image_P32",
                      "href": "docs/grt__images___spec.html#L43C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 44,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L44C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L44C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_I32",
                      "href": "docs/grt__types___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L44C45"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 44,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 44,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_I32",
                "docHref": "docs/grt__types___spec.html#L38C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 44,
              "column": 45,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Image_P64",
          "qualifier": "",
          "line": 41,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 41,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Image_P64",
                      "href": "docs/grt__images___spec.html#L41C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 42,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L42C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L42C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_I64",
                      "href": "docs/grt__types___spec.html#L39C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L42C45"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 42,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 42,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_I64",
                "docHref": "docs/grt__types___spec.html#L39C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 42,
              "column": 45,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_Time_To_String_Unit",
          "qualifier": "",
          "line": 65,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 65,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Time_To_String_Unit",
                      "href": "docs/grt__images___spec.html#L65C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 66,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L66C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 67,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L67C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_Time",
                      "href": "docs/grt__types___spec.html#L65C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Unit",
                      "href": "docs/grt__images___spec.html#L67C23"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_Time",
                      "href": "docs/grt__types___spec.html#L65C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L67C40"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 66,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 67,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_Time",
                "docHref": "docs/grt__types___spec.html#L65C9"
              },
              "description": [
              ]
            },
            {
              "label": "Unit",
              "line": 67,
              "column": 23,
              "type": {
                "label": "Grt.Types.Std_Time",
                "docHref": "docs/grt__types___spec.html#L65C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 67,
              "column": 40,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_B1",
          "qualifier": "",
          "line": 53,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 53,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_B1",
                      "href": "docs/grt__images___spec.html#L53C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 54,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L54C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L54C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_B1",
                      "href": "docs/grt__types___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L54C44"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 54,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 54,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_B1",
                "docHref": "docs/grt__types___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 54,
              "column": 44,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_Char",
          "qualifier": "",
          "line": 59,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 59,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_Char",
                      "href": "docs/grt__images___spec.html#L59C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 60,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L60C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L60C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_Character",
                      "href": "docs/grt__types___spec.html#L78C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 60,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 60,
              "column": 29,
              "type": {
                "label": "Grt.Types.Std_Character",
                "docHref": "docs/grt__types___spec.html#L78C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_E32",
          "qualifier": "",
          "line": 57,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 57,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_E32",
                      "href": "docs/grt__images___spec.html#L57C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 58,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L58C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L58C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_E32",
                      "href": "docs/grt__types___spec.html#L37C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L58C45"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 58,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 58,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_E32",
                "docHref": "docs/grt__types___spec.html#L37C12"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 58,
              "column": 45,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_E8",
          "qualifier": "",
          "line": 55,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 55,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_E8",
                      "href": "docs/grt__images___spec.html#L55C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 56,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L56C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L56C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_E8",
                      "href": "docs/grt__types___spec.html#L35C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L56C44"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 56,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 56,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_E8",
                "docHref": "docs/grt__types___spec.html#L35C12"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 56,
              "column": 44,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_F64",
          "qualifier": "",
          "line": 48,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 48,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_F64",
                      "href": "docs/grt__images___spec.html#L48C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L48C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L48C56"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_F64",
                      "href": "docs/grt__types___spec.html#L41C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 48,
              "column": 34,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 48,
              "column": 56,
              "type": {
                "label": "Grt.Types.Ghdl_F64",
                "docHref": "docs/grt__types___spec.html#L41C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_F64_Digits",
          "qualifier": "",
          "line": 49,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 49,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_F64_Digits",
                      "href": "docs/grt__images___spec.html#L49C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 50,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L50C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L50C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_F64",
                      "href": "docs/grt__types___spec.html#L41C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Nbr_Digits",
                      "href": "docs/grt__images___spec.html#L50C45"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_I32",
                      "href": "docs/grt__types___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 50,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 50,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_F64",
                "docHref": "docs/grt__types___spec.html#L41C9"
              },
              "description": [
              ]
            },
            {
              "label": "Nbr_Digits",
              "line": 50,
              "column": 45,
              "type": {
                "label": "Grt.Types.Ghdl_I32",
                "docHref": "docs/grt__types___spec.html#L38C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_F64_Format",
          "qualifier": "",
          "line": 51,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 51,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_F64_Format",
                      "href": "docs/grt__images___spec.html#L51C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 52,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L52C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L52C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_F64",
                      "href": "docs/grt__types___spec.html#L41C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Format",
                      "href": "docs/grt__images___spec.html#L52C45"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 52,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 52,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_F64",
                "docHref": "docs/grt__types___spec.html#L41C9"
              },
              "description": [
              ]
            },
            {
              "label": "Format",
              "line": 52,
              "column": 45,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_I32",
          "qualifier": "",
          "line": 46,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 46,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_I32",
                      "href": "docs/grt__images___spec.html#L46C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L46C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L46C56"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_I32",
                      "href": "docs/grt__types___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 46,
              "column": 34,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 46,
              "column": 56,
              "type": {
                "label": "Grt.Types.Ghdl_I32",
                "docHref": "docs/grt__types___spec.html#L38C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_I64",
          "qualifier": "",
          "line": 47,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 47,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_I64",
                      "href": "docs/grt__images___spec.html#L47C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L47C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L47C56"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_I64",
                      "href": "docs/grt__types___spec.html#L39C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 47,
              "column": 34,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 47,
              "column": 56,
              "type": {
                "label": "Grt.Types.Ghdl_I64",
                "docHref": "docs/grt__types___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_P32",
          "qualifier": "",
          "line": 61,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 61,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_P32",
                      "href": "docs/grt__images___spec.html#L61C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 62,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L62C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L62C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_I32",
                      "href": "docs/grt__types___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L62C45"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 62,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 62,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_I32",
                "docHref": "docs/grt__types___spec.html#L38C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 62,
              "column": 45,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Ghdl_To_String_P64",
          "qualifier": "",
          "line": 63,
          "column": 14,
          "src": "srcs/grt-images.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 63,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_To_String_P64",
                      "href": "docs/grt__images___spec.html#L63C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 64,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/grt__images___spec.html#L64C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Std_String_Ptr",
                      "href": "docs/grt__types___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/grt__images___spec.html#L64C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_I64",
                      "href": "docs/grt__types___spec.html#L39C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Rti",
                      "href": "docs/grt__images___spec.html#L64C45"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ghdl_Rti_Access",
                      "href": "docs/grt__rtis___spec.html#L140C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Res",
              "line": 64,
              "column": 7,
              "type": {
                "label": "Grt.Types.Std_String_Ptr",
                "docHref": "docs/grt__types___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 64,
              "column": 29,
              "type": {
                "label": "Grt.Types.Ghdl_I64",
                "docHref": "docs/grt__types___spec.html#L39C9"
              },
              "description": [
              ]
            },
            {
              "label": "Rti",
              "line": 64,
              "column": 45,
              "type": {
                "label": "Grt.Rtis.Ghdl_Rti_Access",
                "docHref": "docs/grt__rtis___spec.html#L140C9"
              },
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Subprograms"
    }
  ]
};