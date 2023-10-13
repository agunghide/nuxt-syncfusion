<template>
  <div id="app" class="flex w-full">
    <div
      class="flex-1"
    >
      <ejs-documenteditor
        id="container6"
        ref="doceditcontainer"
        height="1024px"
        style="width: 100%"
        :document-editor-settings="{
          optimizeSfdt: false
        }"
        :key-down="keyDown"
        :content-change="updatedData"
        :service-url="serviceUrl"
        :is-read-only="false"
        :enable-auto-focus="false"
        :enable-print="true"
        :enable-sfdt-export="true"
        :enable-selection="true"
        :enable-context-menu="true"
        :enable-search="true"
        :enable-options-pane="true"
        :enable-word-export="true"
        :enable-text-export="true"
        :enable-editor="true"
        :enable-image-resizer="true"
        :enable-editor-history="true"
        :enable-hyperlink-dialog="true"
        :enable-table-dialog="true"
        :enable-bookmark-dialog="true"
        :enable-table-of-contents-dialog="true"
        :enable-page-setup-dialog="true"
        :enable-style-dialog="true"
        :enable-list-dialog="true"
        :enable-paragraph-dialog="true"
        :enable-font-dialog="true"
        :enable-table-properties-dialog="true"
        :enable-borders-and-shading-dialog="true"
        :enable-table-options-dialog="true"
      />
    </div>
    <div class="px-12 py-32 bg-gray-400 w-15">
      <h1 class="font-bold mb-5">
        Contoh Dinamis Data
      </h1>
      <div class="space-y-3">
        <div class="spce-y-1">
          <label for="header">Image</label>
          <select
            id="header"
            v-model="selectedImage"
            class="w-full rounded-md p-2"
          >
            <option
              v-for="(image, index) in images"
              :key="index"
              :value="index"
            >
              {{ image.label }}
            </option>
          </select>
        </div>
        <div class="spce-y-1">
          <label for="tandatangan">Penandatangan</label>
          <input
            id="tandatangan"
            v-model="tandatangan"
            placeholder="Input Penandatangan"
            class="w-full rounded-md p-2"
            type="text"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Vue from 'vue'
import { DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor'

// Vue.use(DocumentEditorPlugin)

// eslint-disable-next-line import/no-webpack-loader-syntax
// import defaultDocument from 'raw-loader!../components/data.sfdt'

export default {
  name: 'EditorBaru',
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  provide: {
    // Inject require modules.
    DocumentEditor: [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
  },
  data () {
    return {
      serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      images: [
        {
          label: 'Vue Js',
          // eslint-disable-next-line quotes
          value: `data:image/png;base64,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`

        },
        {
          label: 'Nuxt Js',
          // eslint-disable-next-line quotes
          value: `data:image/png;base64,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`
        }
      ],
      selectedImage: 0,
      tandatangan: ''
    }
  },
  computed: {
    penandatangan () {
      return this.tandatangan || 'Nama Orang'
    },
    data () {
      return `
        {
    "optimizeSfdt": false,
    "sections": [
        {
            "sectionFormat": {
                "pageWidth": 612,
                "pageHeight": 792,
                "leftMargin": 72,
                "rightMargin": 72,
                "topMargin": 72,
                "bottomMargin": 72,
                "headerDistance": 36,
                "footerDistance": 36,
                "differentFirstPage": false,
                "differentOddAndEvenPages": false,
                "bidi": false,
                "breakCode": "NewPage",
                "endnoteNumberFormat": "LowerCaseRoman",
                "footNoteNumberFormat": "Arabic",
                "restartIndexForFootnotes": "DoNotRestart",
                "restartIndexForEndnotes": "DoNotRestart",
                "initialFootNoteNumber": 1,
                "initialEndNoteNumber": 1,
                "pageNumberStyle": "Arabic",
                "numberOfColumns": 1,
                "equalWidth": true,
                "lineBetweenColumns": false,
                "columns": []
            },
            "blocks": [
                {
                    "paragraphFormat": {
                        "borders": {
                            "top": {},
                            "left": {},
                            "right": {},
                            "bottom": {},
                            "horizontal": {},
                            "vertical": {}
                        },
                        "styleName": "Normal",
                        "listFormat": {}
                    },
                    "characterFormat": {},
                    "inlines": [
                        {
                            "characterFormat": {},
                            "imageString": "0",
                            "isMetaFile": false,
                            "width": 472.125,
                            "height": 331.54425000000003,
                            "name": "Picture 1",
                            "alternativeText": "8 Essential NuxtJS Modules For Your Next Vue.js Project | by Yuyu | Vue.js  Developers | Medium",
                            "visible": true,
                            "widthScale": 100,
                            "heightScale": 100,
                            "verticalPosition": 0,
                            "verticalOrigin": "Margin",
                            "verticalAlignment": "None",
                            "horizontalPosition": 0,
                            "horizontalOrigin": "Margin",
                            "horizontalAlignment": "None",
                            "allowOverlap": true,
                            "textWrappingStyle": "Inline",
                            "textWrappingType": "Both",
                            "belowText": false,
                            "distanceBottom": 0,
                            "distanceLeft": 9,
                            "distanceRight": 9,
                            "distanceTop": 0,
                            "layoutInCell": true,
                            "zOrderPosition": 2147483647
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "borders": {
                            "top": {},
                            "left": {},
                            "right": {},
                            "bottom": {},
                            "horizontal": {},
                            "vertical": {}
                        },
                        "rightIndent": 0,
                        "firstLineIndent": 0,
                        "textAlignment": "Justify",
                        "beforeSpacing": 0,
                        "afterSpacing": 11.25,
                        "spaceBeforeAuto": false,
                        "spaceAfterAuto": false,
                        "listFormat": {}
                    },
                    "characterFormat": {
                        "bold": false,
                        "italic": false,
                        "fontSize": 10.5,
                        "fontFamily": "Open Sans",
                        "fontColor": "#000000FF",
                        "boldBidi": false,
                        "italicBidi": false,
                        "fontFamilyBidi": "Open Sans",
                        "allCaps": false,
                        "fontFamilyAscii": "Open Sans",
                        "fontFamilyNonFarEast": "Open Sans",
                        "fontFamilyFarEast": "Open Sans"
                    },
                    "inlines": [
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Lorem "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ipsum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dolor "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "amet, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "consectetur "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "adipiscing "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "elit. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Donec "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "iaculis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "semper "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "mi, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ac "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "venenatis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "felis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dignissim "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vitae. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Integer "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vulputate "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "leo "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "et "
                        },
                        {
                            "characterFormat": {
                              "italic": false,
                                "bold": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "mi "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tincidunt, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "quis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "eleifend "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tellus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "maximus. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "In "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "hac "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "habitasse "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "platea "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dictumst. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Praesent "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ac "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pretium "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "velit, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ut "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lacinia "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lectus. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Donec "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "id "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "odio "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vitae "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dui "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "auctor "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "laoreet "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ac "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ut "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nisi. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Vestibulum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "volutpat "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ullamcorper "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "mauris, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nec "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "venenatis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tellus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "luctus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "id. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Etiam "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "maximus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "urna "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "mauris, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "eget "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pulvinar "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "massa "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "gravida "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "interdum. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Vestibulum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "feugiat "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "rutrum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lectus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "quis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vestibulum. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Donec "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "est "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "leo, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "bibendum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "a "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "semper "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sodales "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lectus."
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "borders": {
                            "top": {},
                            "left": {},
                            "right": {},
                            "bottom": {},
                            "horizontal": {},
                            "vertical": {}
                        },
                        "rightIndent": 0,
                        "firstLineIndent": 0,
                        "textAlignment": "Justify",
                        "beforeSpacing": 0,
                        "afterSpacing": 11.25,
                        "spaceBeforeAuto": false,
                        "spaceAfterAuto": false,
                        "listFormat": {}
                    },
                    "characterFormat": {
                        "bold": false,
                        "italic": false,
                        "fontSize": 10.5,
                        "fontFamily": "Open Sans",
                        "fontColor": "#000000FF",
                        "boldBidi": false,
                        "italicBidi": false,
                        "fontFamilyBidi": "Open Sans",
                        "allCaps": false,
                        "fontFamilyAscii": "Open Sans",
                        "fontFamilyNonFarEast": "Open Sans",
                        "fontFamilyFarEast": "Open Sans"
                    },
                    "inlines": [
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Duis "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lacus "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ante, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "bibendum "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "egestas "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sed, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "feugiat "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "neque. "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Donec "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ultrices, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "turpis "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "in "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vestibulum "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "hendrerit, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tortor "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "felis "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "congue "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "mauris, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ut "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "porttitor "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "leo "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "neque "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sed "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "orci. "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Aenean "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "id "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ex "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "suscipit, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pulvinar "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ante "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "id, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "fringilla "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nulla. "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Nunc "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "a "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "porta "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dolor. "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Phasellus "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vel "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "consequat "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "orci. "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Duis "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "massa "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dui, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "consequat "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "in "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pellentesque "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "non, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "volutpat "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "id "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ligula. "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Sed "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "urna "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "libero, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sodales "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sit "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "amet "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ante "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sed, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sodales "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pellentesque "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "mi. "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Sed "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vitae "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "cursus "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lectus, "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "malesuada "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "posuere "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lacus. "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Nullam "
                        },
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "placerat "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "leo "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nisi. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Fusce "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "volutpat "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "magna "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nisi, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "rutrum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ligula "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "bibendum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "eget. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Orci "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "varius "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "natoque "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "penatibus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "et "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "magnis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "parturient "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "montes, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nascetur "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ridiculus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "mus. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Aenean "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "turpis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ligula, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "euismod "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ut "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sagittis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "amet, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "cursus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sed "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "urna. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Fusce "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "in "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tincidunt "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "quam."
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "borders": {
                            "top": {},
                            "left": {},
                            "right": {},
                            "bottom": {},
                            "horizontal": {},
                            "vertical": {}
                        },
                        "rightIndent": 0,
                        "firstLineIndent": 0,
                        "textAlignment": "Justify",
                        "beforeSpacing": 0,
                        "afterSpacing": 11.25,
                        "spaceBeforeAuto": false,
                        "spaceAfterAuto": false,
                        "listFormat": {}
                    },
                    "characterFormat": {
                        "bold": false,
                        "italic": false,
                        "fontSize": 10.5,
                        "fontFamily": "Open Sans",
                        "fontColor": "#000000FF",
                        "boldBidi": false,
                        "italicBidi": false,
                        "fontFamilyBidi": "Open Sans",
                        "allCaps": false,
                        "fontFamilyAscii": "Open Sans",
                        "fontFamilyNonFarEast": "Open Sans",
                        "fontFamilyFarEast": "Open Sans"
                    },
                    "inlines": [
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Aenean "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nisi "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ipsum, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "fermentum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lacinia "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "a, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "consectetur "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sed "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dui. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Morbi "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "blandit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tristique "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nunc, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "consectetur "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "suscipit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "purus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "suscipit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Nunc "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "facilisis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "rutrum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "odio, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dictum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sem "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "gravida "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "amet. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Integer "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "egestas "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "metus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "amet "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "quam "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tincidunt "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pretium. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Lorem "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ipsum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dolor "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "amet, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "consectetur "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "adipiscing "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "elit. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "In "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "erat "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dignissim "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nunc "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "gravida "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "condimentum. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Sed "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "a "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tristique "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ante. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Nulla "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "facilisi. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Donec "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vulputate "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lorem "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "eget "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vestibulum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tincidunt."
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "borders": {
                            "top": {},
                            "left": {},
                            "right": {},
                            "bottom": {},
                            "horizontal": {},
                            "vertical": {}
                        },
                        "rightIndent": 0,
                        "firstLineIndent": 0,
                        "textAlignment": "Justify",
                        "beforeSpacing": 0,
                        "afterSpacing": 11.25,
                        "spaceBeforeAuto": false,
                        "spaceAfterAuto": false,
                        "listFormat": {}
                    },
                    "characterFormat": {
                        "bold": false,
                        "italic": false,
                        "fontSize": 10.5,
                        "fontFamily": "Open Sans",
                        "fontColor": "#000000FF",
                        "boldBidi": false,
                        "italicBidi": false,
                        "fontFamilyBidi": "Open Sans",
                        "allCaps": false,
                        "fontFamilyAscii": "Open Sans",
                        "fontFamilyNonFarEast": "Open Sans",
                        "fontFamilyFarEast": "Open Sans"
                    },
                    "inlines": [
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Vestibulum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "consectetur "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "scelerisque "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "justo, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "quis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vulputate "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "est "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "facilisis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "amet. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Ut "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vestibulum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "hendrerit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "purus, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "non "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "feugiat "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nibh "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pulvinar "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vel. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Vestibulum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "massa "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nisl, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "egestas "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nec "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nunc "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "a, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "aliquet "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "laoreet "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nisi. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Morbi "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "a "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tempor "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lorem. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Donec "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ac "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sodales "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nulla. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Suspendisse "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pulvinar "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "risus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "non "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "faucibus. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Curabitur "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "a "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "neque "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tincidunt, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pulvinar "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ipsum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "non, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pulvinar "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "massa. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Proin "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "a "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "interdum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sem. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Maecenas "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "elementum "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nisl "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "vitae "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "odio "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "rhoncus, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "eu "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "tincidunt "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "dui "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "pretium. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Suspendisse "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "cursus "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "nisi "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "quis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "augue "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "gravida, "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "suscipit "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "imperdiet "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ex "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "finibus. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Sed "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "in "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "mollis "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "mi. "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Fusce "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "at "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "fringilla "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "sem."
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "borders": {
                            "top": {},
                            "left": {},
                            "right": {},
                            "bottom": {},
                            "horizontal": {},
                            "vertical": {}
                        },
                        "styleName": "Normal",
                        "listFormat": {}
                    },
                    "characterFormat": {
                        "bold": false,
                        "italic": false,
                        "fontSize": 10.5,
                        "fontFamily": "Open Sans",
                        "fontColor": "#000000FF",
                        "boldBidi": false,
                        "italicBidi": false,
                        "fontFamilyBidi": "Open Sans",
                        "allCaps": false,
                        "fontFamilyAscii": "Open Sans",
                        "fontFamilyNonFarEast": "Open Sans",
                        "fontFamilyFarEast": "Open Sans"
                    },
                    "inlines": [
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "Nullam sagittis elit quis cursus bibendum. Fusce efficitur maximus dignissim. Maecenas luctus lacus ac augue "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "cursus, eget ultrices lacus sodales. Nulla vitae rutrum metus. Integer condimentum purus ut elit bibendum, non "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "lobortis dui sollicitudin. Cras eget consectetur purus, tincidunt condimentum libero. Praesent fermentum, dolor "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "in sollicitudin finibus, libero ante sagittis nisl, quis elementum lacus mi a est. Interdum et malesuada fames ac "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "ante ipsum primis in faucibus. Sed lorem erat, accumsan vitae commodo id, tincidunt hendrerit neque. Proin et "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "magna metus. Mauris sapien velit, porta at nunc vitae, posuere accumsan diam. Fusce ullamcorper pretium "
                        },
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 10.5,
                                "fontFamily": "Open Sans",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Open Sans",
                                "allCaps": false,
                                "fontFamilyAscii": "Open Sans",
                                "fontFamilyNonFarEast": "Open Sans",
                                "fontFamilyFarEast": "Open Sans"
                            },
                            "text": "libero sit amet viverra. Proin porttitor at lacus at porta."
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "borders": {
                            "top": {},
                            "left": {},
                            "right": {},
                            "bottom": {},
                            "horizontal": {},
                            "vertical": {}
                        },
                        "styleName": "Normal",
                        "listFormat": {}
                    },
                    "characterFormat": {},
                    "inlines": []
                },
                {
                    "paragraphFormat": {
                        "borders": {
                            "top": {},
                            "left": {},
                            "right": {},
                            "bottom": {},
                            "horizontal": {},
                            "vertical": {}
                        },
                        "rightIndent": 0,
                        "firstLineIndent": 0,
                        "textAlignment": "Left",
                        "beforeSpacing": 0,
                        "afterSpacing": 8,
                        "spaceBeforeAuto": false,
                        "spaceAfterAuto": false,
                        "styleName": "Normal (Web)",
                        "listFormat": {}
                    },
                    "characterFormat": {
                        "bold": false,
                        "italic": false,
                        "fontSize": 12,
                        "fontFamily": "Times New Roman",
                        "fontColor": "#000000FF",
                        "boldBidi": false,
                        "italicBidi": false,
                        "fontFamilyBidi": "Times New Roman",
                        "allCaps": false,
                        "fontFamilyAscii": "Times New Roman",
                        "fontFamilyNonFarEast": "Times New Roman",
                        "fontFamilyFarEast": "Times New Roman"
                    },
                    "inlines": [
                        {
                            "characterFormat": {
                                "bold": false,
                                "italic": false,
                                "fontSize": 12,
                                "fontFamily": "Times New Roman",
                                "fontColor": "#000000FF",
                                "boldBidi": false,
                                "italicBidi": false,
                                "fontFamilyBidi": "Times New Roman",
                                "allCaps": false,
                                "fontFamilyAscii": "Times New Roman",
                                "fontFamilyNonFarEast": "Times New Roman",
                                "fontFamilyFarEast": "Times New Roman"
                            },
                            "text": ""
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "borders": {
                                                    "top": {},
                                                    "left": {},
                                                    "right": {},
                                                    "bottom": {},
                                                    "horizontal": {},
                                                    "vertical": {}
                                                },
                                                "rightIndent": 0,
                                                "textAlignment": "Center",
                                                "beforeSpacing": 0,
                                                "afterSpacing": 8,
                                                "spaceBeforeAuto": false,
                                                "spaceAfterAuto": false,
                                                "lineSpacingType": "Multiple",
                                                "styleName": "Normal (Web)",
                                                "widowControl": true,
                                                "listFormat": {}
                                            },
                                            "characterFormat": {
                                                "bold": false,
                                                "italic": false,
                                                "fontSize": 12,
                                                "fontFamily": "Times New Roman",
                                                "fontColor": "#000000FF",
                                                "boldBidi": false,
                                                "italicBidi": false,
                                                "fontFamilyBidi": "Times New Roman",
                                                "allCaps": false,
                                                "fontFamilyAscii": "Times New Roman",
                                                "fontFamilyNonFarEast": "Times New Roman",
                                                "fontFamilyFarEast": "Times New Roman"
                                            },
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "imageString": "1",
                                                    "isMetaFile": false,
                                                    "width": 74.55,
                                                    "height": 49.15973,
                                                    "name": "Picture 1",
                                                    "visible": true,
                                                    "widthScale": 36.014496,
                                                    "heightScale": 36.014454,
                                                    "verticalPosition": 0,
                                                    "verticalOrigin": "Margin",
                                                    "verticalAlignment": "None",
                                                    "horizontalPosition": 0,
                                                    "horizontalOrigin": "Margin",
                                                    "horizontalAlignment": "None",
                                                    "allowOverlap": true,
                                                    "textWrappingStyle": "Inline",
                                                    "textWrappingType": "Both",
                                                    "belowText": false,
                                                    "distanceBottom": 0,
                                                    "distanceLeft": 9,
                                                    "distanceRight": 9,
                                                    "distanceTop": 0,
                                                    "layoutInCell": true,
                                                    "zOrderPosition": 2147483647
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            },
                                            "left": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 4
                                            },
                                            "right": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "bottom": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            },
                                            "diagonalDown": {
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            },
                                            "vertical": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "texture": "TextureNone"
                                        },
                                        "preferredWidth": 99.34657957251177,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 99.3389826779345,
                                        "columnSpan": 1,
                                        "rowSpan": 3,
                                        "verticalAlignment": "Center"
                                    },
                                    "columnIndex": 0
                                },
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "borders": {
                                                    "top": {},
                                                    "left": {},
                                                    "right": {},
                                                    "bottom": {},
                                                    "horizontal": {},
                                                    "vertical": {}
                                                },
                                                "rightIndent": 0,
                                                "textAlignment": "Left",
                                                "beforeSpacing": 0,
                                                "afterSpacing": 8,
                                                "spaceBeforeAuto": false,
                                                "spaceAfterAuto": false,
                                                "styleName": "Normal (Web)",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {
                                                "bold": false,
                                                "italic": false,
                                                "fontSize": 12,
                                                "fontFamily": "Times New Roman",
                                                "fontColor": "#000000FF",
                                                "boldBidi": false,
                                                "italicBidi": false,
                                                "fontFamilyBidi": "Times New Roman",
                                                "allCaps": false,
                                                "fontFamilyAscii": "Times New Roman",
                                                "fontFamilyNonFarEast": "Times New Roman",
                                                "fontFamilyFarEast": "Times New Roman"
                                            },
                                            "inlines": [
                                                {
                                                    "characterFormat": {
                                                        "bold": false,
                                                        "italic": false,
                                                        "fontSize": 12,
                                                        "fontFamily": "Times New Roman",
                                                        "fontColor": "#000000FF",
                                                        "boldBidi": false,
                                                        "italicBidi": false,
                                                        "fontFamilyBidi": "Times New Roman",
                                                        "allCaps": false,
                                                        "fontFamilyAscii": "Times New Roman",
                                                        "fontFamilyNonFarEast": "Times New Roman",
                                                        "fontFamilyFarEast": "Times New Roman"
                                                    },
                                                    "text": "Ditandatangani Oleh:"
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            },
                                            "left": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "right": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 4
                                            },
                                            "bottom": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalDown": {
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            },
                                            "vertical": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "texture": "TextureNone"
                                        },
                                        "preferredWidth": 140.5,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 140.4892561606781,
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "verticalAlignment": "Top"
                                    },
                                    "columnIndex": 1
                                }
                            ],
                            "rowFormat": {
                                "height": 1,
                                "allowBreakAcrossPages": true,
                                "heightType": "AtLeast",
                                "isHeader": false,
                                "borders": {
                                    "top": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "left": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "right": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "bottom": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalDown": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalUp": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "horizontal": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "Cleared",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "vertical": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "Cleared",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    }
                                },
                                "gridBefore": 0,
                                "gridAfter": 0,
                                "leftMargin": 0,
                                "topMargin": 0,
                                "rightMargin": 0,
                                "bottomMargin": 0
                            }
                        },
                        {
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "borders": {
                                                    "top": {},
                                                    "left": {},
                                                    "right": {},
                                                    "bottom": {},
                                                    "horizontal": {},
                                                    "vertical": {}
                                                },
                                                "rightIndent": 0,
                                                "textAlignment": "Left",
                                                "beforeSpacing": 0,
                                                "afterSpacing": 8,
                                                "spaceBeforeAuto": false,
                                                "spaceAfterAuto": false,
                                                "styleName": "Normal (Web)",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {
                                                "bold": false,
                                                "italic": false,
                                                "fontSize": 12,
                                                "fontFamily": "Times New Roman",
                                                "fontColor": "#000000FF",
                                                "boldBidi": false,
                                                "italicBidi": false,
                                                "fontFamilyBidi": "Times New Roman",
                                                "allCaps": false,
                                                "fontFamilyAscii": "Times New Roman",
                                                "fontFamilyNonFarEast": "Times New Roman",
                                                "fontFamilyFarEast": "Times New Roman"
                                            },
                                            "inlines": [
                                                {
                                                    "characterFormat": {
                                                        "bold": false,
                                                        "italic": false,
                                                        "fontSize": 12,
                                                        "fontFamily": "Times New Roman",
                                                        "fontColor": "#000000FF",
                                                        "boldBidi": false,
                                                        "italicBidi": false,
                                                        "fontFamilyBidi": "Times New Roman",
                                                        "allCaps": false,
                                                        "fontFamilyAscii": "Times New Roman",
                                                        "fontFamilyNonFarEast": "Times New Roman",
                                                        "fontFamilyFarEast": "Times New Roman"
                                                    },
                                                    "text": ""
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "left": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "right": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 4
                                            },
                                            "bottom": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalDown": {
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            },
                                            "vertical": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "texture": "TextureNone"
                                        },
                                        "preferredWidth": 140.5,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 140.4892561606781,
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "verticalAlignment": "Top"
                                    },
                                    "columnIndex": 1
                                }
                            ],
                            "rowFormat": {
                                "height": 1,
                                "allowBreakAcrossPages": true,
                                "heightType": "AtLeast",
                                "isHeader": false,
                                "borders": {
                                    "top": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "left": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "right": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "bottom": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalDown": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalUp": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "horizontal": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "Cleared",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "vertical": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "Cleared",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    }
                                },
                                "gridBefore": 0,
                                "gridAfter": 0,
                                "leftMargin": 0,
                                "topMargin": 0,
                                "rightMargin": 0,
                                "bottomMargin": 0
                            }
                        },
                        {
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "borders": {
                                                    "top": {},
                                                    "left": {},
                                                    "right": {},
                                                    "bottom": {},
                                                    "horizontal": {},
                                                    "vertical": {}
                                                },
                                                "rightIndent": 0,
                                                "textAlignment": "Left",
                                                "beforeSpacing": 0,
                                                "afterSpacing": 8,
                                                "spaceBeforeAuto": false,
                                                "spaceAfterAuto": false,
                                                "styleName": "Normal (Web)",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {
                                                "bold": false,
                                                "italic": false,
                                                "fontSize": 12,
                                                "fontFamily": "Times New Roman",
                                                "fontColor": "#000000FF",
                                                "boldBidi": false,
                                                "italicBidi": false,
                                                "fontFamilyBidi": "Times New Roman",
                                                "allCaps": false,
                                                "fontFamilyAscii": "Times New Roman",
                                                "fontFamilyNonFarEast": "Times New Roman",
                                                "fontFamilyFarEast": "Times New Roman"
                                            },
                                            "inlines": [
                                                {
                                                    "characterFormat": {
                                                        "bold": false,
                                                        "italic": false,
                                                        "fontSize": 12,
                                                        "fontFamily": "Times New Roman",
                                                        "fontColor": "#000000FF",
                                                        "boldBidi": false,
                                                        "italicBidi": false,
                                                        "fontFamilyBidi": "Times New Roman",
                                                        "allCaps": false,
                                                        "fontFamilyAscii": "Times New Roman",
                                                        "fontFamilyNonFarEast": "Times New Roman",
                                                        "fontFamilyFarEast": "Times New Roman"
                                                    },
                                                    "text": "${this.penandatangan}"
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "left": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "right": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 4
                                            },
                                            "bottom": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            },
                                            "diagonalDown": {
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            },
                                            "vertical": {
                                                "color": "#000000FF",
                                                "hasNoneStyle": false,
                                                "lineStyle": "Single",
                                                "lineWidth": 0.5,
                                                "shadow": false,
                                                "space": 1
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "texture": "TextureNone"
                                        },
                                        "preferredWidth": 140.5,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 140.4892561606781,
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "verticalAlignment": "Top"
                                    },
                                    "columnIndex": 1
                                }
                            ],
                            "rowFormat": {
                                "height": 1,
                                "allowBreakAcrossPages": true,
                                "heightType": "AtLeast",
                                "isHeader": false,
                                "borders": {
                                    "top": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "left": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "right": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "bottom": {
                                        "color": "#000000FF",
                                        "hasNoneStyle": false,
                                        "lineStyle": "Single",
                                        "lineWidth": 0.5,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalDown": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalUp": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "horizontal": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "Cleared",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "vertical": {
                                        "hasNoneStyle": false,
                                        "lineStyle": "Cleared",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    }
                                },
                                "gridBefore": 0,
                                "gridAfter": 0,
                                "leftMargin": 0,
                                "topMargin": 0,
                                "rightMargin": 0,
                                "bottomMargin": 0
                            }
                        }
                    ],
                    "grid": [
                        99.3389826779345,
                        140.4892561606781
                    ],
                    "tableFormat": {
                        "borders": {
                            "top": {
                                "color": "#000000FF",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "left": {
                                "color": "#000000FF",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "right": {
                                "color": "#000000FF",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "bottom": {
                                "color": "#000000FF",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "diagonalDown": {
                                "hasNoneStyle": false,
                                "lineStyle": "None",
                                "lineWidth": 0,
                                "shadow": false,
                                "space": 0
                            },
                            "diagonalUp": {
                                "hasNoneStyle": false,
                                "lineStyle": "None",
                                "lineWidth": 0,
                                "shadow": false,
                                "space": 0
                            },
                            "horizontal": {
                                "hasNoneStyle": false,
                                "lineStyle": "Cleared",
                                "lineWidth": 0,
                                "shadow": false,
                                "space": 0
                            },
                            "vertical": {
                                "hasNoneStyle": false,
                                "lineStyle": "Cleared",
                                "lineWidth": 0,
                                "shadow": false,
                                "space": 0
                            }
                        },
                        "shading": {},
                        "leftIndent": 237.98980999998741,
                        "tableAlignment": "Left",
                        "topMargin": 0,
                        "rightMargin": 0,
                        "leftMargin": 0,
                        "bottomMargin": 0,
                        "preferredWidth": 239.82823883861258,
                        "preferredWidthType": "Point",
                        "bidi": false,
                        "allowAutoFit": false
                    },
                    "description": "",
                    "title": "",
                    "columnCount": 2
                },
                {
                    "paragraphFormat": {
                        "borders": {
                            "top": {},
                            "left": {},
                            "right": {},
                            "bottom": {},
                            "horizontal": {},
                            "vertical": {}
                        },
                        "styleName": "Normal",
                        "listFormat": {}
                    },
                    "characterFormat": {},
                    "inlines": []
                }
            ],
            "headersFooters": {}
        }
    ],
    "characterFormat": {
        "bold": false,
        "italic": false,
        "fontSize": 11,
        "fontFamily": "Calibri",
        "underline": "None",
        "strikethrough": "None",
        "baselineAlignment": "Normal",
        "highlightColor": "NoColor",
        "fontColor": "#00000000",
        "fontSizeBidi": 11,
        "fontFamilyBidi": "Calibri",
        "allCaps": false,
        "fontFamilyAscii": "Calibri",
        "fontFamilyNonFarEast": "Calibri",
        "fontFamilyFarEast": "Calibri"
    },
    "paragraphFormat": {
        "borders": {
            "top": {},
            "left": {},
            "right": {},
            "bottom": {},
            "horizontal": {},
            "vertical": {}
        },
        "leftIndent": 0,
        "rightIndent": 0,
        "firstLineIndent": 0,
        "textAlignment": "Left",
        "beforeSpacing": 0,
        "afterSpacing": 0,
        "lineSpacing": 1,
        "lineSpacingType": "Multiple",
        "bidi": false,
        "keepLinesTogether": false,
        "keepWithNext": false,
        "widowControl": true,
        "listFormat": {}
    },
    "themeFontLanguages": {},
    "defaultTabWidth": 36,
    "trackChanges": false,
    "enforcement": false,
    "hashValue": "",
    "saltValue": "",
    "formatting": false,
    "protectionType": "NoProtection",
    "dontUseHTMLParagraphAutoSpacing": false,
    "formFieldShading": true,
    "compatibilityMode": "Word2013",
    "allowSpaceOfSameStyleInTable": false,
    "styles": [
        {
            "name": "Normal",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "listFormat": {}
            },
            "characterFormat": {
                "fontSize": 12,
                "fontFamily": "Times New Roman",
                "fontSizeBidi": 12,
                "localeIdBidi": 1025,
                "fontFamilyAscii": "Times New Roman",
                "fontFamilyNonFarEast": "Times New Roman",
                "fontFamilyFarEast": "Times New Roman"
            },
            "next": "Normal"
        },
        {
            "name": "Heading 1",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "leftIndent": 0,
                "rightIndent": 0,
                "firstLineIndent": 0,
                "textAlignment": "Left",
                "beforeSpacing": 12,
                "afterSpacing": 0,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level1",
                "listFormat": {}
            },
            "characterFormat": {
                "fontSize": 16,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Normal",
            "link": "Heading 1 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 1 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 16,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Default Paragraph Font",
            "type": "Character",
            "characterFormat": {}
        },
        {
            "name": "Heading 2",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "leftIndent": 0,
                "rightIndent": 0,
                "firstLineIndent": 0,
                "textAlignment": "Left",
                "beforeSpacing": 2,
                "afterSpacing": 0,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level2",
                "listFormat": {}
            },
            "characterFormat": {
                "fontSize": 13,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Normal",
            "link": "Heading 2 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 2 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 13,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 3",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "leftIndent": 0,
                "rightIndent": 0,
                "firstLineIndent": 0,
                "textAlignment": "Left",
                "beforeSpacing": 2,
                "afterSpacing": 0,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level3",
                "listFormat": {}
            },
            "characterFormat": {
                "fontSize": 12,
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Normal",
            "link": "Heading 3 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 3 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 12,
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 4",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "leftIndent": 0,
                "rightIndent": 0,
                "firstLineIndent": 0,
                "textAlignment": "Left",
                "beforeSpacing": 2,
                "afterSpacing": 0,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level4",
                "listFormat": {}
            },
            "characterFormat": {
                "italic": true,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Normal",
            "link": "Heading 4 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 4 Char",
            "type": "Character",
            "characterFormat": {
                "italic": true,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 5",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "leftIndent": 0,
                "rightIndent": 0,
                "firstLineIndent": 0,
                "textAlignment": "Left",
                "beforeSpacing": 2,
                "afterSpacing": 0,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level5",
                "listFormat": {}
            },
            "characterFormat": {
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Normal",
            "link": "Heading 5 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 5 Char",
            "type": "Character",
            "characterFormat": {
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 6",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "leftIndent": 0,
                "rightIndent": 0,
                "firstLineIndent": 0,
                "textAlignment": "Left",
                "beforeSpacing": 2,
                "afterSpacing": 0,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level6",
                "listFormat": {}
            },
            "characterFormat": {
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Normal",
            "link": "Heading 6 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 6 Char",
            "type": "Character",
            "characterFormat": {
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763",
                "fontFamilyAscii": "Calibri Light",
                "fontFamilyNonFarEast": "Calibri Light",
                "fontFamilyFarEast": "Calibri Light"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Header",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "afterSpacing": 0,
                "lineSpacing": 1,
                "lineSpacingType": "Multiple",
                "listFormat": {}
            },
            "characterFormat": {},
            "basedOn": "Normal",
            "next": "Header"
        },
        {
            "name": "Footer",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "afterSpacing": 0,
                "lineSpacing": 1,
                "lineSpacingType": "Multiple",
                "listFormat": {}
            },
            "characterFormat": {},
            "basedOn": "Normal",
            "next": "Footer"
        },
        {
            "name": "Normal (Web)",
            "type": "Paragraph",
            "paragraphFormat": {
                "borders": {
                    "top": {},
                    "left": {},
                    "right": {},
                    "bottom": {},
                    "horizontal": {},
                    "vertical": {}
                },
                "beforeSpacing": 5,
                "afterSpacing": 5,
                "spaceBeforeAuto": true,
                "spaceAfterAuto": true,
                "listFormat": {}
            },
            "characterFormat": {
                "fontSize": 12
            },
            "basedOn": "Normal",
            "next": "Normal (Web)"
        }
    ],
    "lists": [],
    "abstractLists": [],
    "comments": [],
    "revisions": [],
    "customXml": [],
    "images": {
        "0": [
            "${this.images[this.selectedImage].value}"
        ],
        "1": [
            "data:image/jpeg;base64,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"
        ]
    }
}`
    },
    watchedData () {
      return [this.selectedImage, this.penandatangan]
    }
  },
  watch: {
    watchedData () {
      const obj = this.$refs.doceditcontainer
      obj.open(this.data)
    }
  },
  mounted () {
    this.$nextTick(function () {
      const obj = this.$refs.doceditcontainer
      obj.open(this.data)
      // obj.open(require('../components/data.sfdt').default)
      obj.documentName = 'Getting Started'

      obj.updateFields = () => {
        console.log('Tes')
      }

      console.log(this.$refs.doceditcontainer)
    })
  },
  methods: {
    updatedData () {
      console.log(this.$refs.doceditcontainer.serialize())
    },
    keyDown (args) {
      const keyCode = args.event.which || args.event.keyCode

      const isCtrlKey = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17))

      const isAltKey = args.event.altKey ? args.event.altKey : ((keyCode === 18))

      // 83 is the character code for 'S'
      if (isCtrlKey && !isAltKey && keyCode === 83) {
        // To prevent default save operation, set the isHandled property to true
        args.isHandled = true
        this.$refs.doceditcontainer.save('sample', 'Sfdt')
        args.event.preventDefault()
      } else if (isCtrlKey && isAltKey && keyCode === 83) {
        this.$refs.doceditcontainer.save('sample', 'Sfdt')
      }
    }
  }
}
</script>
<style scoped>
@import "https://cdn.syncfusion.com/ej2/22.1.34/material3.css";
</style>
