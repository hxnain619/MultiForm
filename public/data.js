let DATA = {
    "question": [{
            id: 0,
            first: true,
            title: "Welche Immobilie möchten Sie bewerten lassen?",
            desc: "",
            type: "option",
            options: [{
                id: 0,
                    title: "Wohnung",
                    icon: "https://i.ibb.co/rH2RSXT/Wohnung-2.png",
                    type: 'option',
                    query: [{
                            id: 0,
                            title: "Wie groß ist die Fläche der Wohnung?",
                            desc: "(in Quadratmeter)",
                            type: "option",
                            options: [{
                                    title: "Unter 100 qm",
                                    icon: "https://i.ibb.co/FXXWDWL/Fl-che-10-0.png"
                                },
                                {
                                    title: "100-200 qm",
                                    icon: "https://i.ibb.co/tcwmMjT/Fl-che-10-1.png"
                                },
                                {
                                    title: "mehr als 200 qm",
                                    icon: "https://i.ibb.co/9GWHFCK/Fl-che-10-3.png"
                                }
                            ]
                        },
                        {
                            id: 1,
                            title: "Wie viel Zimmer hat die Wohnung?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "1-2 Zimmer",
                                    icon: "https://i.ibb.co/BBLj95m/Zimmer-1-2.png"
                                },
                                {
                                    title: "3-4 Zimmer",
                                    icon: "https://i.ibb.co/2jnj8cT/Zimmer-4.png"
                                },
                                {
                                    title: "mehr als 4 Zimmer",
                                    icon: "https://i.ibb.co/2v0gwS8/Zimmer.png"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Aus welchem Jahrzehnt stammt das Wohnhaus?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Vor 1960",
                                    icon: "https://i.ibb.co/MVCj3MN/Kran-6.png"
                                },
                                {
                                    title: "1960-1990",
                                    icon: "https://i.ibb.co/H2nb0rm/Kran-3.png"

                                },
                                {
                                    title: "1991-2010",
                                    icon: "https://i.ibb.co/H2nb0rm/Kran-4.png"
                                },
                                {
                                    title: "Ab 2011",
                                    icon: "https://i.ibb.co/0CnLWBX/Kran-2.png"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Ist in der Wohnung eine Einbauküche?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Nein",
                                    icon: "https://i.ibb.co/7WQ3mwp/None-1.png"
                                },
                                {
                                    title: "Ja, älter",
                                    icon: "https://i.ibb.co/k1WmFRf/Kitchen-1.png"

                                },
                                {
                                    title: "Ja, neu",
                                    icon: "https://i.ibb.co/PMfpt5w/Kitchen-d2.png"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Ist ein Aufzug im Haus vorhanden?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Nein",
                                    icon: "https://i.ibb.co/7WQ3mwp/None-1.png"
                                },
                                {
                                    title: "Ja",
                                    icon: "https://i.ibb.co/Mfngch7/Aufzug.png"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Sind Parkmöglichkeiten vorhanden?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Garage",
                                    icon: "https://i.ibb.co/HTT3Kdn/Parking-3.png"
                                },
                                {
                                    title: "Carport",
                                    icon: "https://i.ibb.co/Pw42fQy/Parking-4.png"
                                },
                                {
                                    title: "Stellplatz im Freien",
                                    icon: "https://i.ibb.co/L9BzNMJ/Parking-1.png"
                                },
                                {
                                    title: "Keine Parkplätze",
                                    icon: "https://i.ibb.co/RDPhhxJ/Parking-5-n.png"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 1,
                    title: "Haus",
                    icon: "https://i.ibb.co/nQyzNGr/1c-Haus.png",
                    type: 'option',
                    query: [{
                            id: 0,
                            title: "Was für ein Haus besitzen Sie?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Einfamilienhaus",
                                    icon: "https://i.ibb.co/nQyzNGr/1c-Haus.png"
                                },
                                {
                                    title: "Doppelhaushälfte",
                                    icon: "https://i.ibb.co/g9T0S2h/Haus-zwei.png"
                                },
                                {
                                    title: "Mehrfamilienhaus",
                                    icon: "https://i.ibb.co/VmGYDjN/Haus-Mehrfamilien.png"
                                },
                                {
                                    title: "Sonstiges",
                                    icon: "https://i.ibb.co/cKBsdhx/Haus-sonstiges1.png"
                                }
                            ]
                        },
                        {
                            id: 1,
                            title: "Wie groß ist die Grundstücksfläche?",
                            desc: "(in Quadratmeter)",
                            type: "option",
                            options: [{
                                    title: "Unter 300 qm",
                                    icon: "https://i.ibb.co/FXXWDWL/Fl-che-10-0.png"
                                },
                                {
                                    title: "300-500 qm",
                                    icon: "https://i.ibb.co/tcwmMjT/Fl-che-10-1.png"
                                },
                                {
                                    title: "mehr als 500 qm",
                                    icon: "https://i.ibb.co/9GWHFCK/Fl-che-10-3.png"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Wie groß ist die Wohnfläche des Hauses?",
                            desc: "(in Quadratmeter)",
                            type: "option",
                            options: [{
                                    title: "Unter 200 qm",
                                    icon: "https://i.ibb.co/4tqgMCQ/Whgs-Fl-che-1.png"
                                },
                                {
                                    title: "200 - 500 qm",
                                    icon: "https://i.ibb.co/zV0Mrqj/Whgs-Fl-che-2.png"
                                },
                                {
                                    title: "über 500 qm",
                                    icon: "https://i.ibb.co/2ck7Gr2/Grundst-ck-3.png"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Aus welchem Jahrzehnt stammt das Haus?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Vor 1960",
                                    icon: "https://i.ibb.co/MVCj3MN/Kran-6.png"
                                },
                                {
                                    title: "1960-1990",
                                    icon: "https://i.ibb.co/H2nb0rm/Kran-3.png"
                                },
                                {
                                    title: "1991-2010",
                                    icon: "https://i.ibb.co/0CnLWBX/Kran-4.png"
                                },
                                {
                                    title: "Ab 2011",
                                    icon: "https://i.ibb.co/S0NsmpG/Kran-2.png"
                                },
                            ]
                        },
                        {
                            id: 4,
                            title: "Wie ist der Zustand des Hauses?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Unsaniert",
                                    icon: "https://i.ibb.co/F4KfMB4/Saniert-nicht-saniert.png"
                                },
                                {
                                    title: "Teilsaniert",
                                    icon: "https://i.ibb.co/myZKK0H/Saniert-teilsaniert.png"
                                },
                                {
                                    title: "Saniert",
                                    icon: "https://i.ibb.co/F7prYhK/Saniert-1.png"
                                },
                            ]
                        },
                        {
                            id: 5,
                            title: "Ist das Haus vermietet?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Unvermietet",
                                    icon: "https://i.ibb.co/C2WfCNx/Unvermietet.png"
                                },
                                {
                                    title: "Teilvermietet",
                                    icon: "https://i.ibb.co/Yyqc9bc/Unvermietet-teilvermietet.png"
                                },
                                {
                                    title: "Vermietet",
                                    icon: "https://i.ibb.co/HCN3p27/Unvermietet-vermietet.png"
                                },
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Gewerbe",
                    icon: "https://i.ibb.co/wMvFwxb/1a-Gewerbe-1.png",
                    type: 'option',
                    query: [{
                            id: 0,
                            title: "Wofür kann das Gebäude genutzt werden?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Bürogebäude",
                                    icon: "https://i.ibb.co/g7PKrBL/Objektart-B-ros.png"
                                },
                                {
                                    title: "Wohn- und Geschäftsgebäude",
                                    icon: "https://i.ibb.co/txb2Hyq/H-user.png"
                                },
                                {
                                    title: "Sonstige Fläche",
                                    icon: "https://i.ibb.co/SNHP0vt/B-ros-1.png"
                                },
                                {
                                    title: "Ich bin mir unsicher",
                                    icon: "https://i.ibb.co/Dp6wx3w/Unsicher-1.png"
                                }
                            ]
                        },
                        {
                            id: 1,
                            title: "Aus welchem Jahrzehnt stammt das Gewerbe-Gebäude?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Vor 1960",
                                    icon: "https://i.ibb.co/MVCj3MN/Kran-6.png"
                                },
                                {
                                    title: "1960-1990",
                                    icon: "https://i.ibb.co/H2nb0rm/Kran-3.png"
                                },
                                {
                                    title: "1991-2010",
                                    icon: "https://i.ibb.co/0CnLWBX/Kran-4.png"
                                },
                                {
                                    title: "Ab 2011",
                                    icon: "https://i.ibb.co/S0NsmpG/Kran-2.png"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Wie groß ist die Fläche des Gewerbe-Grundstücks?",
                            desc: "(in Quadratmeter)",
                            type: "option",
                            options: [{
                                    title: "1-300 qm",
                                    icon: "https://i.ibb.co/xfcf37w/Map.png"
                                },
                                {
                                    title: "300-600 qm",
                                    icon: "https://i.ibb.co/ykdkc8W/Map-2.png"
                                },
                                {
                                    title: "mehr als 600 qm",
                                    icon: "https://i.ibb.co/mB8hHHq/Map-3-1.png"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Wie groß ist die Nutzfläche des Gewerbes??",
                            desc: "(in Quadratmeter)",
                            type: "option",
                            options: [{
                                    title: "Unter 100 qm",
                                    icon: "https://i.ibb.co/FXXWDWL/Fl-che-10-0.png"
                                },
                                {
                                    title: "100-200 qm",
                                    icon: "https://i.ibb.co/tcwmMjT/Fl-che-10-1.png"
                                },
                                {
                                    title: "mehr als 200 qm",
                                    icon: "https://i.ibb.co/9GWHFCK/Fl-che-10-3.png"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Grundstück",
                    icon: "https://i.ibb.co/V3YKJT1/1d-Grundst-ck-1.png",
                    type: 'option',
                    query: [{
                            id: 0,
                            title: "Wie groß ist die Nutzfläche des Gewerbes??",
                            desc: "(in Quadratmeter)",
                            type: 'option',
                            options: [{
                                    title: "Unter 300 qm",
                                    icon: "https://i.ibb.co/FXXWDWL/Fl-che-10-0.png"
                                },
                                {
                                    title: "300-600 qm",
                                    icon: "https://i.ibb.co/tcwmMjT/Fl-che-10-1.png"
                                },
                                {
                                    title: "über 600 qm",
                                    icon: "https://i.ibb.co/9GWHFCK/Fl-che-10-3.png"
                                }
                            ]
                        },
                        {
                            id: 1,
                            title: "Ist das Grundstück erschlossen?",
                            desc: "(in Quadratmeter)",
                            type: "option",
                            options: [{
                                    title: "Unerschlossen",
                                    icon: "https://i.ibb.co/mhnvpkR/Erschlossen-no.png"
                                },
                                {
                                    title: "Teilerschlossen",
                                    icon: "https://i.ibb.co/nLxwX4m/Erschlossen-teils.png"
                                },
                                {
                                    title: "Erschlossen",
                                    icon: "https://i.ibb.co/xYrWLfS/Erschlossen-ja.png"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Ist das Grundstück bebaubar?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Nicht bebaubar",
                                    icon: "https://i.ibb.co/HgkbXTF/Bebaubar-5.png"
                                },
                                {
                                    title: "Teilweise bebaubar",
                                    icon: "https://i.ibb.co/qn0p7Dk/Bebaubar-1.png"
                                },
                                {
                                    title: "Bebaubar",
                                    icon: "https://i.ibb.co/41cCTtw/Bebaubar-7.png"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Welchen Zuschnitt hat das Grundstück?",
                            desc: "",
                            type: "option",
                            options: [{
                                    title: "Eckgrundstück",
                                    icon: "https://i.ibb.co/Ptw1x5M/Grundst-ck-4.png"
                                },
                                {
                                    title: "Rechteck",
                                    icon: "https://i.ibb.co/V3YKJT1/1d-Grundst-ck-1.png"
                                },
                                {
                                    title: "Sonstige",
                                    icon: "https://i.ibb.co/WFgy2GX/Grundst-ck-2.png"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 1,
            title: "Wo befindet sich Ihre Immobilie?",
            desc: "Bitte geben Sie die Postleitzahl ein.",
            type: "number"
        },
        {
            last: true,
            id: 2,
            title: "Vielen Dank! Wer soll die gratis Verkaufspreis-Schätzung erhalten?",
            desc: "",
            type: "form",
            icon: "https://i.ibb.co/xfcf37w/Map.png"
        }

    ]
}