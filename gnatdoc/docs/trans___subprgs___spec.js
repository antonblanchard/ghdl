GNATdoc.Documentation = {
  "label": "Trans.Subprgs",
  "qualifier": "(nested)",
  "summary": [
  ],
  "description": [
    {
      "kind": "paragraph",
      "children": [
        {
          "kind": "span",
          "text": "Subprograms instances.\n"
        }
      ]
    },
    {
      "kind": "paragraph",
      "children": [
        {
          "kind": "span",
          "text": "Subprograms declared inside entities, architecture, blocks\n"
        },
        {
          "kind": "span",
          "text": "or processes (but not inside packages) may access to data declared\n"
        },
        {
          "kind": "span",
          "text": "outside the subprogram (and this with a life longer than the\n"
        },
        {
          "kind": "span",
          "text": "subprogram life).  These data correspond to constants, variables,\n"
        },
        {
          "kind": "span",
          "text": "files, signals or types.  However these data are not shared between\n"
        },
        {
          "kind": "span",
          "text": "instances of the same entity, architecture...  Subprograms instances\n"
        },
        {
          "kind": "span",
          "text": "is the way subprograms access to these data.\n"
        },
        {
          "kind": "span",
          "text": "One subprogram instance corresponds to a record.\n"
        }
      ]
    }
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "Null_Subprg_Instance",
          "qualifier": "",
          "line": 644,
          "column": 7,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 644,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Null_Subprg_Instance"
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
                      "cssClass": "keyword",
                      "text": "constant"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Subprg_Instance_Type"
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
          ]
        }
      ],
      "label": "Constants and variables"
    },
    {
      "entities": [
        {
          "label": "Subprg_Instance_Stack",
          "qualifier": "",
          "line": 611,
          "column": 12,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 611,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Subprg_Instance_Stack",
                      "href": "docs/trans___subprgs___spec.html#L611C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "limited"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "private"
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
                  "text": "Type to save an old instance builder.  Subprograms may have at most\n"
                },
                {
                  "kind": "span",
                  "text": "one instance.  If they need severals (for example a protected\n"
                },
                {
                  "kind": "span",
                  "text": "subprogram), the most recent one will have a reference to the\n"
                },
                {
                  "kind": "span",
                  "text": "previous one.\n"
                }
              ]
            }
          ]
        },
        {
          "label": "Subprg_Instance_Type",
          "qualifier": "",
          "line": 643,
          "column": 12,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 643,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L643C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "private"
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
                  "text": "Contains the subprogram interface for the instance.\n"
                }
              ]
            }
          ]
        }
      ],
      "label": "Record types"
    },
    {
      "entities": [
        {
          "label": "Add_Subprg_Instance_Assoc",
          "qualifier": "",
          "line": 657,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 657,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Add_Subprg_Instance_Assoc",
                      "href": "docs/trans___subprgs___spec.html#L657C17"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 658,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Assocs",
                      "href": "docs/trans___subprgs___spec.html#L658C10"
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
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "O_Assoc_List",
                      "href": "docs/ortho_mcode___spec.html#L522C9"
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
                      "text": "Vars",
                      "href": "docs/trans___subprgs___spec.html#L658C40"
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
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L693C12"
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
                  "text": "Associate values to the instance interface during invocation of a\n"
                },
                {
                  "kind": "span",
                  "text": "subprogram.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Assocs",
              "line": 658,
              "column": 10,
              "type": {
                "label": "Ortho_Mcode.O_Assoc_List",
                "docHref": "docs/ortho_mcode___spec.html#L304C9"
              },
              "description": [
              ]
            },
            {
              "label": "Vars",
              "line": 658,
              "column": 40,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Type",
                "docHref": "docs/trans___subprgs___spec.html#L643C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Add_Subprg_Instance_Field",
          "qualifier": "",
          "line": 652,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 652,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Add_Subprg_Instance_Field",
                      "href": "docs/trans___subprgs___spec.html#L652C17"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 653,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Field",
                      "href": "docs/trans___subprgs___spec.html#L653C10"
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
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "O_Fnode",
                      "href": "docs/ortho_mcode___spec.html#L502C9"
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
                      "text": "Prev_Scope",
                      "href": "docs/trans___subprgs___spec.html#L653C31"
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
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Var_Scope_Acc",
                      "href": "docs/trans___chap10___spec.html#L246C12"
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
                  "text": "Add a field in the current factory that reference the current\n"
                },
                {
                  "kind": "span",
                  "text": "instance.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Field",
              "line": 653,
              "column": 10,
              "type": {
                "label": "Ortho_Mcode.O_Fnode",
                "docHref": "docs/ortho_mcode___spec.html#L45C9"
              },
              "description": [
              ]
            },
            {
              "label": "Prev_Scope",
              "line": 653,
              "column": 31,
              "type": {
                "label": "Trans.Chap10.Var_Scope_Acc",
                "docHref": "docs/trans___chap10___spec.html#L246C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Add_Subprg_Instance_Interfaces",
          "qualifier": "",
          "line": 647,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 647,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Add_Subprg_Instance_Interfaces",
                      "href": "docs/trans___subprgs___spec.html#L647C17"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 648,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Interfaces",
                      "href": "docs/trans___subprgs___spec.html#L648C10"
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
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "O_Inter_List",
                      "href": "docs/ortho_mcode___spec.html#L519C9"
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
                      "text": "Vars",
                      "href": "docs/trans___subprgs___spec.html#L648C44"
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
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L693C12"
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
                  "text": "Add interfaces during the creation of a subprogram.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Interfaces",
              "line": 648,
              "column": 10,
              "type": {
                "label": "Ortho_Mcode.O_Inter_List",
                "docHref": "docs/ortho_mcode___spec.html#L303C9"
              },
              "description": [
              ]
            },
            {
              "label": "Vars",
              "line": 648,
              "column": 44,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Type",
                "docHref": "docs/trans___subprgs___spec.html#L643C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Clear_Subprg_Instance",
          "qualifier": "",
          "line": 632,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 632,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Clear_Subprg_Instance",
                      "href": "docs/trans___subprgs___spec.html#L632C17"
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
                      "text": "Prev",
                      "href": "docs/trans___subprgs___spec.html#L632C40"
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
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Subprg_Instance_Stack",
                      "href": "docs/trans___subprgs___spec.html#L701C12"
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
                  "text": "Since local subprograms has a direct access to its father interfaces,\n"
                },
                {
                  "kind": "span",
                  "text": "they do not required instances interfaces.\n"
                },
                {
                  "kind": "span",
                  "text": "These procedures are provided to temporarly disable the addition of\n"
                },
                {
                  "kind": "span",
                  "text": "instances interfaces. Use Pop_Subpg_Instance to restore to the\n"
                },
                {
                  "kind": "span",
                  "text": "previous state.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Prev",
              "line": 632,
              "column": 40,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Stack",
                "docHref": "docs/trans___subprgs___spec.html#L611C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Subprg_Instance",
          "qualifier": "",
          "line": 684,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 684,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Create_Subprg_Instance",
                      "href": "docs/trans___subprgs___spec.html#L684C17"
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
                      "text": "Interfaces",
                      "href": "docs/trans___subprgs___spec.html#L684C41"
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
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "O_Inter_List",
                      "href": "docs/ortho_mcode___spec.html#L519C9"
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
                  "number": 685,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Subprg",
                      "href": "docs/trans___subprgs___spec.html#L685C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
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
                      "text": "Iir",
                      "href": "docs/vhdl__nodes___spec.html#L6920C12"
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
                  "text": "Same as above, but for IIR.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Interfaces",
              "line": 684,
              "column": 41,
              "type": {
                "label": "Ortho_Mcode.O_Inter_List",
                "docHref": "docs/ortho_mcode___spec.html#L303C9"
              },
              "description": [
              ]
            },
            {
              "label": "Subprg",
              "line": 685,
              "column": 41,
              "type": {
                "label": "Vhdl.Nodes.Iir",
                "docHref": "docs/vhdl__nodes___spec.html#L6920C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Finish_Prev_Subprg_Instance_Use_Via_Field",
          "qualifier": "",
          "line": 680,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 680,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Finish_Prev_Subprg_Instance_Use_Via_Field",
                      "href": "docs/trans___subprgs___spec.html#L680C17"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 681,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Prev_Scope",
                      "href": "docs/trans___subprgs___spec.html#L681C10"
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
                      "text": "Var_Scope_Acc",
                      "href": "docs/trans___chap10___spec.html#L246C12"
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
                      "text": "Field",
                      "href": "docs/trans___subprgs___spec.html#L681C38"
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
                      "text": "O_Fnode",
                      "href": "docs/ortho_mcode___spec.html#L502C9"
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
              "label": "Prev_Scope",
              "line": 681,
              "column": 10,
              "type": {
                "label": "Trans.Chap10.Var_Scope_Acc",
                "docHref": "docs/trans___chap10___spec.html#L246C12"
              },
              "description": [
              ]
            },
            {
              "label": "Field",
              "line": 681,
              "column": 38,
              "type": {
                "label": "Ortho_Mcode.O_Fnode",
                "docHref": "docs/ortho_mcode___spec.html#L45C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Finish_Subprg_Instance_Use",
          "qualifier": "",
          "line": 675,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 675,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Finish_Subprg_Instance_Use",
                      "href": "docs/trans___subprgs___spec.html#L675C17"
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
                      "text": "Vars",
                      "href": "docs/trans___subprgs___spec.html#L675C45"
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
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L693C12"
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
              "label": "Vars",
              "line": 675,
              "column": 45,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Type",
                "docHref": "docs/trans___subprgs___spec.html#L643C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Finish_Subprg_Instance_Use",
          "qualifier": "",
          "line": 688,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 688,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Finish_Subprg_Instance_Use",
                      "href": "docs/trans___subprgs___spec.html#L688C17"
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
                      "text": "Subprg",
                      "href": "docs/trans___subprgs___spec.html#L688C45"
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
                      "text": "Iir",
                      "href": "docs/vhdl__nodes___spec.html#L6920C12"
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
              "label": "Subprg",
              "line": 688,
              "column": 45,
              "type": {
                "label": "Vhdl.Nodes.Iir",
                "docHref": "docs/vhdl__nodes___spec.html#L6920C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Subprg_Instance",
          "qualifier": "",
          "line": 661,
          "column": 16,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 661,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Subprg_Instance",
                      "href": "docs/trans___subprgs___spec.html#L661C16"
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
                      "text": "Vars",
                      "href": "docs/trans___subprgs___spec.html#L661C37"
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
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L693C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 662,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "O_Enode",
                      "href": "docs/ortho_mcode___spec.html#L501C9"
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
                  "text": "Get the value to be associated to the instance interface.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Vars",
              "line": 661,
              "column": 37,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Type",
                "docHref": "docs/trans___subprgs___spec.html#L643C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Has_Current_Subprg_Instance",
          "qualifier": "",
          "line": 640,
          "column": 16,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 640,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Has_Current_Subprg_Instance",
                      "href": "docs/trans___subprgs___spec.html#L640C16"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Boolean"
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
                  "text": "True iff there is currently a subprogram instance.\n"
                }
              ]
            }
          ]
        },
        {
          "label": "Has_Subprg_Instance",
          "qualifier": "",
          "line": 665,
          "column": 16,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 665,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Has_Subprg_Instance",
                      "href": "docs/trans___subprgs___spec.html#L665C16"
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
                      "text": "Vars",
                      "href": "docs/trans___subprgs___spec.html#L665C37"
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
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L693C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 666,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Boolean"
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
                  "text": "True iff VARS is associated with an instance.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Vars",
              "line": 665,
              "column": 37,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Type",
                "docHref": "docs/trans___subprgs___spec.html#L643C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Instantiate_Subprg_Instance",
          "qualifier": "",
          "line": 690,
          "column": 16,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 690,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Instantiate_Subprg_Instance",
                      "href": "docs/trans___subprgs___spec.html#L690C16"
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
                      "text": "Inst",
                      "href": "docs/trans___subprgs___spec.html#L690C45"
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
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L693C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 691,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L693C12"
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
              "label": "Inst",
              "line": 690,
              "column": 45,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Type",
                "docHref": "docs/trans___subprgs___spec.html#L643C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Pop_Subprg_Instance",
          "qualifier": "",
          "line": 636,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 636,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Pop_Subprg_Instance",
                      "href": "docs/trans___subprgs___spec.html#L636C17"
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
                      "text": "Ident",
                      "href": "docs/trans___subprgs___spec.html#L636C38"
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
                      "text": "O_Ident",
                      "href": "docs/ortho_ident___spec.html#L22C12"
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
                  "number": 637,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Prev",
                      "href": "docs/trans___subprgs___spec.html#L637C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "  "
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
                      "text": "Subprg_Instance_Stack",
                      "href": "docs/trans___subprgs___spec.html#L701C12"
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
                  "text": "Revert of the previous subprogram.\n"
                },
                {
                  "kind": "span",
                  "text": "Instances must be removed in opposite order they are added.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Ident",
              "line": 636,
              "column": 38,
              "type": {
                "label": "Ortho_Ident.O_Ident",
                "docHref": "docs/ortho_ident___spec.html#L22C12"
              },
              "description": [
              ]
            },
            {
              "label": "Prev",
              "line": 637,
              "column": 38,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Stack",
                "docHref": "docs/trans___subprgs___spec.html#L611C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Push_Subprg_Instance",
          "qualifier": "",
          "line": 622,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 622,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Push_Subprg_Instance",
                      "href": "docs/trans___subprgs___spec.html#L622C17"
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
                      "text": "Scope",
                      "href": "docs/trans___subprgs___spec.html#L622C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "Var_Scope_Acc",
                      "href": "docs/trans___chap10___spec.html#L246C12"
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
                  "number": 623,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ptr_Type",
                      "href": "docs/trans___subprgs___spec.html#L623C39"
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
                      "text": "O_Tnode",
                      "href": "docs/ortho_mcode___spec.html#L498C9"
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
                  "number": 624,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ident",
                      "href": "docs/trans___subprgs___spec.html#L624C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "O_Ident",
                      "href": "docs/ortho_ident___spec.html#L22C12"
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
                  "number": 625,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Prev",
                      "href": "docs/trans___subprgs___spec.html#L625C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
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
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Subprg_Instance_Stack",
                      "href": "docs/trans___subprgs___spec.html#L701C12"
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
                  "text": "Declare an instance to be added for subprograms.\n"
                },
                {
                  "kind": "span",
                  "text": "SCOPE is the scope to pass to the subprogram.\n"
                },
                {
                  "kind": "span",
                  "text": "PTR_TYPE is a pointer to SCOPE.\n"
                },
                {
                  "kind": "span",
                  "text": "IDENT is an identifier for the interface.\n"
                },
                {
                  "kind": "span",
                  "text": "The previous instance is stored to PREV.  It must be restored with\n"
                },
                {
                  "kind": "span",
                  "text": "Pop_Subprg_Instance.\n"
                },
                {
                  "kind": "span",
                  "text": "Add_Subprg_Instance_Interfaces will add an interface of name IDENT\n"
                },
                {
                  "kind": "span",
                  "text": "and type PTR_TYPE for every instance declared by\n"
                },
                {
                  "kind": "span",
                  "text": "Push_Subprg_Instance.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Scope",
              "line": 622,
              "column": 39,
              "type": {
                "label": "Trans.Chap10.Var_Scope_Acc",
                "docHref": "docs/trans___chap10___spec.html#L246C12"
              },
              "description": [
              ]
            },
            {
              "label": "Ptr_Type",
              "line": 623,
              "column": 39,
              "type": {
                "label": "Ortho_Mcode.O_Tnode",
                "docHref": "docs/ortho_mcode___spec.html#L41C9"
              },
              "description": [
              ]
            },
            {
              "label": "Ident",
              "line": 624,
              "column": 39,
              "type": {
                "label": "Ortho_Ident.O_Ident",
                "docHref": "docs/ortho_ident___spec.html#L22C12"
              },
              "description": [
              ]
            },
            {
              "label": "Prev",
              "line": 625,
              "column": 39,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Stack",
                "docHref": "docs/trans___subprgs___spec.html#L611C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Set_Subprg_Instance_Field",
          "qualifier": "",
          "line": 669,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 669,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Set_Subprg_Instance_Field",
                      "href": "docs/trans___subprgs___spec.html#L669C17"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 670,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Var",
                      "href": "docs/trans___subprgs___spec.html#L670C10"
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
                      "text": "O_Dnode",
                      "href": "docs/ortho_mcode___spec.html#L500C9"
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
                      "text": "Field",
                      "href": "docs/trans___subprgs___spec.html#L670C25"
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
                      "text": "O_Fnode",
                      "href": "docs/ortho_mcode___spec.html#L502C9"
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
                      "text": "Vars",
                      "href": "docs/trans___subprgs___spec.html#L670C42"
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
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L693C12"
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
                  "text": "Assign the instance field FIELD of VAR.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Var",
              "line": 670,
              "column": 10,
              "type": {
                "label": "Ortho_Mcode.O_Dnode",
                "docHref": "docs/ortho_mcode___spec.html#L43C9"
              },
              "description": [
              ]
            },
            {
              "label": "Field",
              "line": 670,
              "column": 25,
              "type": {
                "label": "Ortho_Mcode.O_Fnode",
                "docHref": "docs/ortho_mcode___spec.html#L45C9"
              },
              "description": [
              ]
            },
            {
              "label": "Vars",
              "line": 670,
              "column": 42,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Type",
                "docHref": "docs/trans___subprgs___spec.html#L643C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Start_Prev_Subprg_Instance_Use_Via_Field",
          "qualifier": "",
          "line": 678,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 678,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Start_Prev_Subprg_Instance_Use_Via_Field",
                      "href": "docs/trans___subprgs___spec.html#L678C17"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 679,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Prev_Scope",
                      "href": "docs/trans___subprgs___spec.html#L679C10"
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
                      "text": "Var_Scope_Acc",
                      "href": "docs/trans___chap10___spec.html#L246C12"
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
                      "text": "Field",
                      "href": "docs/trans___subprgs___spec.html#L679C38"
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
                      "text": "O_Fnode",
                      "href": "docs/ortho_mcode___spec.html#L502C9"
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
                  "text": "Call Push_Scope to reference instance from FIELD.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Prev_Scope",
              "line": 679,
              "column": 10,
              "type": {
                "label": "Trans.Chap10.Var_Scope_Acc",
                "docHref": "docs/trans___chap10___spec.html#L246C12"
              },
              "description": [
              ]
            },
            {
              "label": "Field",
              "line": 679,
              "column": 38,
              "type": {
                "label": "Ortho_Mcode.O_Fnode",
                "docHref": "docs/ortho_mcode___spec.html#L45C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Start_Subprg_Instance_Use",
          "qualifier": "",
          "line": 674,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 674,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Start_Subprg_Instance_Use",
                      "href": "docs/trans___subprgs___spec.html#L674C17"
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
                      "text": "Vars",
                      "href": "docs/trans___subprgs___spec.html#L674C44"
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
                      "text": "Subprg_Instance_Type",
                      "href": "docs/trans___subprgs___spec.html#L693C12"
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
                  "text": "To be called at the beginning and end of a subprogram body creation.\n"
                },
                {
                  "kind": "span",
                  "text": "Call PUSH_SCOPE for the subprogram intances.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Vars",
              "line": 674,
              "column": 44,
              "type": {
                "label": "Trans.Subprgs.Subprg_Instance_Type",
                "docHref": "docs/trans___subprgs___spec.html#L643C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Start_Subprg_Instance_Use",
          "qualifier": "",
          "line": 687,
          "column": 17,
          "src": "srcs/trans.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 687,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "Start_Subprg_Instance_Use",
                      "href": "docs/trans___subprgs___spec.html#L687C17"
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
                      "text": "Subprg",
                      "href": "docs/trans___subprgs___spec.html#L687C44"
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
                      "text": "Iir",
                      "href": "docs/vhdl__nodes___spec.html#L6920C12"
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
              "label": "Subprg",
              "line": 687,
              "column": 44,
              "type": {
                "label": "Vhdl.Nodes.Iir",
                "docHref": "docs/vhdl__nodes___spec.html#L6920C12"
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