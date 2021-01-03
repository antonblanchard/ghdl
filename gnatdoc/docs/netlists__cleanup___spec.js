GNATdoc.Documentation = {
  "label": "Netlists.Cleanup",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "Mark_And_Sweep",
          "qualifier": "",
          "line": 29,
          "column": 14,
          "src": "srcs/netlists-cleanup.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 29,
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
                      "text": "Mark_And_Sweep",
                      "href": "docs/netlists__cleanup___spec.html#L29C14"
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
                      "text": "M",
                      "href": "docs/netlists__cleanup___spec.html#L29C30"
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
                      "text": "Module",
                      "href": "docs/netlists___spec.html#L365C9"
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
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Stronger version of Remove_Unconnected_Instances: use a mark and\n"
                },
                {
                  "kind": "span",
                  "text": "sweep algorithm.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "M",
              "line": 29,
              "column": 30,
              "type": {
                "label": "Netlists.Module",
                "docHref": "docs/netlists___spec.html#L98C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Remove_Output_Gates",
          "qualifier": "",
          "line": 32,
          "column": 14,
          "src": "srcs/netlists-cleanup.ads.html",
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
                      "text": "Remove_Output_Gates",
                      "href": "docs/netlists__cleanup___spec.html#L32C14"
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
                      "text": "M",
                      "href": "docs/netlists__cleanup___spec.html#L32C35"
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
                      "text": "Module",
                      "href": "docs/netlists___spec.html#L365C9"
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
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Remove Id_Output gates.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "M",
              "line": 32,
              "column": 35,
              "type": {
                "label": "Netlists.Module",
                "docHref": "docs/netlists___spec.html#L98C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Remove_Unconnected_Instances",
          "qualifier": "",
          "line": 25,
          "column": 14,
          "src": "srcs/netlists-cleanup.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 25,
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
                      "text": "Remove_Unconnected_Instances",
                      "href": "docs/netlists__cleanup___spec.html#L25C14"
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
                      "text": "M",
                      "href": "docs/netlists__cleanup___spec.html#L25C44"
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
                      "text": "Module",
                      "href": "docs/netlists___spec.html#L365C9"
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
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Remove instances of module M whose outputs are not connected.\n"
                },
                {
                  "kind": "span",
                  "text": "Their inputs will be deconnected, which can result in new instances\n"
                },
                {
                  "kind": "span",
                  "text": "that are also removed.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "M",
              "line": 25,
              "column": 44,
              "type": {
                "label": "Netlists.Module",
                "docHref": "docs/netlists___spec.html#L98C9"
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