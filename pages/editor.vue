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
        <div class="space-y-1">
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
        <div class="space-y-1">
          <label for="tandatangan">Penandatangan</label>
          <input
            id="tandatangan"
            v-model="tandatangan"
            placeholder="Input Penandatangan"
            class="w-full rounded-md p-2"
            type="text"
          >
        </div>
        <div class="space-y-1">
          <label>Hello</hello>
            <ejs-documenteditor
              ref="badan"
              height="1024px"
              style="width: 100%"
              :document-editor-settings="{
                optimizeSfdt: false
              }"
              :key-down="keyDown"
              :content-change="updatedDataBadan"
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
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Vue from 'vue'
import { DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor'

// Vue.use(DocumentEditorPlugin)

import dataSFDT from '@/static/tesdata'

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
          value: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAA5FBMVEX///8AvYIAvYM+VGcnPlFAVGglPFDz9fbw+/g9xI9VZ3f7/P0fOExhbnoAwIMAKEASMEZSYW8AunsvRVjFy9CZoqocNktAT2YAw4RLW2oAKUENLUTW2t0XM0hBTWYAuXgAIjzf4uW/6tk8XmpseITs7vCss7m6wcbN7+GHkZuS3L43YGknQlkpwos0dG8zS2AugHPl9vCe4MZVzJ8sg3N61rIgm3kWqX16hY/a9Oqcpa2/xcmvtrtJl4VWYnZKnocRrX4ilHc3aW0ydnBk0KcojXUAEzSw5dGV3L9KyZl81rIAHDoqfmbtAAAOUElEQVR4nO1cCXvSyhou2agQIGwJEELBsohtTdWjVtp7bvXo8Xju//8/d77ZJxmW0kipz7xtaSALzMs33z45OTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDB4hjjVYlbOo7r2GlXN0WX9hQ84ssLw7uqFBv/5s5JDrbzmEuVp/uA//6u77NW7g46tIJxarZIGF5Fr2y76wcAb6WrNJeaX+FjbZofbdnRh1TVXvXqWUnTyA1NkqWPpfRy5iBcybiAIHi5n2gtMyCGET/zo2qNPCkMW+Tt7eeCxFYVvLfTxrcyA6m8iW5IjvJkutecvU9cmbFJhcu3oay9DOn7288AjKwyvWuJ7tth46vd4prkuEw3YSoea04cpOcrl4ob+7lUhIpdtvTr42IrCBzrVLHnC9a5HdMw2ExI7nWrOrqVsN5ts9ui6Jy7F/7W+HXxkheFUkh6OunVOB0yVEjxL73InLy65jmYb7jnV1cpcq1+9fYKxFYV3rcwXjsXoS0TYoVONEJB1jsoVpqNtLnKjj3WFILJx9iwNPsPpi5IG1tdIEQ7YzBn+1aWtShEi6UJ3tdLVetfzOeDlmaRV+cz4NLKp9rVtppFT1fBPqKKihxEh+lS32KXEJZ+twWf4pvqPxLbVr0euKwsI+I83ynk3qaSCCFHRX72cm4Ws2fsnGllh+HyWnWUgRlYkW30iJmlHOm14SZmjv/jw+3r+UqXS5ycbW1H4oAtDen9EfODMhUxr0lm1yGYKnVp9d/RHT3Ol1ocnG1lhONWMCwnAuSuFX+Q3nfOT7i75HqquXFcEZ5ZkIZ9pcKbiXUaMsDpChl+yZ0wpsYh/1pf9JgJs8FWnEeHsx5OOrSCc/qyXNGr2a+Sy0Iv72F16SjflARzT19FFXeGY/r540qEVhleSxrbYAzL8LovU+IxqT/AJk5SZOxHnRzTCl/0HFHo8d4PPoNHYFjL8fKoxnlwaqk1TroNY1iS61urqZxycqXh7JmkQi+rbukWsviJJ6S06vHPJwhJpz70anNFr5Q1+edHVZQ1gT3fdnmPAv1rD/z0SnqNLo7bKyUm1wj0Bm4Vpo+9aIfo3906T/jgOJ9oPsRwHg3XpzafH6ZU0xag6Qj8XEUuHcKaQ4Z9fSvEtnW7nkinj6kxn8JcDx4m1RJRtz3H+LjCcW3TvigwOf+TECDHU+xhRr1BW2cMK87hFyoRE+JagCDOkM/id2HH8pu4jDBvr9uyF8jRO4maBHFXfyyqEb5IcrRKISXqaKXEXsrH0FEvIkNbgz0BWQl0qvBs4TlDcRFsgxp3BfPuBO+NVNlQD1O9HPO3K5EnS3nymIYNviTnKNZE2G3sTIiYWmh0V3/HC4vT1HM1oJ+huP3B3fGhZOdfYQqGayEtzL8jNaCgUnOUz+tYagw/fbniTf32CRuTbxY1n4iReGOsNw554yzQQecTq2qpborbB5hbT0WL+nd/X8+ndkqXPxpaRFHntfO3yDimpQF9o2Q/Dml3pbD/sIfinpUgBgTD8YlrxVBoN0UZfJJeIz7Wzf9a8z9R3nEZ+QtVgAhY7pFnR2c7TF8QkWYr3h3O0QhfZrpAi+lp0LsJXXm2y1mdj54FOR1R9z/H6+orm8eBli7pDlpAGC4dq2aBehLDoteijmkgjFK0PzmZg9ivZmdZBxCUaFXVk+KaWQ8gWFGepHmJGnnlJ2LZFb+r5LEGptaH8aiPT5Wf16DJBJvr2lw6vCORytAAw/GrVXqpAAk2fRCJNwobyKzhAcdZhQbw5/rHPsxMa8WeKYKXeHyNOh7BjbBOysVaOI01wJjAMPSesqa9NxsgV0FV8jw00VGNOMv6PDP95pGgfLkzw5JzzY3Ftb60z+ATlPpppbVViVrFGso4SOEcrmTS8BcVZUXcVCW0cnH3hmog7VFvLr6B3EtXBxp7AA+dZtbqhfU5/xsaOu91AirOq1RfFWTk9RDXSeS/rJ2Ah2vwunUbWes3annCtZ91l1m2qzpdzdWzVxbJpp/Z0fYoJnbOS7Wb17qaSOp5dWy4eRRMJ1TIWiuZobcXuu66cjVXN2ZZsLISyXiy/shiIEHY2DpK/Mz5kpZE0ZE1VXvlx4nue7ycDe42/eTNOYhHQVFdJHKIz4JQ4WD7GMCjFWTby+nVkC5sm5lz0V7ZnD8Roe/kVQtmx/PXfJMgPoC+AjGVdSwcJWVOIxLAfeyiM8X3kbzp+cqNrxazWwLdge8pTfIaHz3C84DFOqsbwW8jwZ4pqUjbWyntFW/utsNBILJT7iII+FX8dRW2Foo6HKA4Dr1+xkwQNOdClhTBFHjtnihwNL0natu0H6BTvUaGOmqMldqqEI36eoGWzDZdf8zX811vfo9yAIYtxddCQExbCbqVo8j9ES6PWgfNnK6AryLgQAIUiSC/4QRf81eqwm47jR6Xu5BytpLkveHcfT6S5F6V69rjSbuXXKRrXQDjY4Ew22Pe6jaIyeOcD3hE268O18qk4hSLYdvj7IVX/OCdVLc4y/xH30bJGGsLR6KOue3in8iuEslJGEAbNe3O2UdSN1f2zNO9mnRCKHErRDCmioECvq/oz52Aj1L9G3NgTnyi6kIseuK8IDr/a5T0mvuxMz5Qs2xaKwBz6fXnnQhfQKFKE0+Lr2uv3ATP8chstydHKJg2Cs5yqtnbtje3LcjNHctHgruQWikDVx0q8W236mrqATFFnjDZ3J2AHfGspKVraAHkdyX6jHV3XFW42ZmNzWAXSQMEHiIW92kwRcs29tponWAaaPGZWipKic7Q56UBixLP7RGnfS80Sojy0Y7/VEPknzMEug9cjbNIWiioh8pBVzYOkUFLGFDJFkKIKp4XmIF/ri7MjKcoffe+JchAndAeDT1Bugo4l25gTYZK2UARTVEORt4kibEGDZpFpXzVU46L0lfnYkNKvZ7xGwtXO3xRMjoT40xDVSjXsXSiaSEu7ZkOg28matGotFBQNG+CGB+lqWJjS/tHKUgRT7WPENDVkY61c8Fpq7d5vNeSiA7kRuTq0nSLH6UuwHV9XXlK96wV4mCgwDO2bTkGJu/dS2ZBv4BwtqS2+6al7icl/QL9VGUZdga0hCghkSnahyMPxGf5FoSl6Pt5o9OFdmo0ER2ko7u0WopVQqJYVImz4aSnf/ZTzGq0HLoZZQigLX+gqVquwO1DkxQ0FY0/nXYcyRYikZbuRQBTrxU4hWukDX4clpRV7JOJ3R2DwSXqR7sER/oN6Y28REwNwhsCr6UtD2YGidmdCMcSYaDRMRooA5eGyieNePyyikPBWMudSRYT00Z5bGa+RMPWgxTDVMXGpZ46n5td2UNftHXwcDUUnwNKNB6orLUIhvZY719hG7wsY/tEX3ggiWbWHLoapEeu9SKQQFrCFouajKEIY2mFBLSjrDT/OxmY0OWw/8A2giD/ogGutusbDsZQZIZhBSEedS1Ax/g4NJDldJK6WIsLTB35aLV5yjU3NOzxCjhZ0dWaWWXv0xk5ghi1PkAJVG0XKiDrPVsZ2m4hk9xJCl/ziuBzWShEttxRi+t9TAixZG/XejN7US2rhH/72WAwDeroCBbSBOuKKn5l6uCWiQTXsLQQTle1X30AR+GSDQowaz9HKIlO/d7OLYQgevhgGvkwHCb0zVgdyF4ArKL22GEv9NrjNLdguRhsomhRGEc3Rsqoj4+iTEB2BjeXXNRgG4KTkGxyrULxOxO0Tbn2lJW+FO/SUEU5WTDnNbjv0PCXSbyqU4olWTCTyVsnRMpFSYjM+3/ZYDAOhLCBnXUD1OGF/iJ3g8gpoDEWAUYZMrOd3uTKZdduDlNi4jh3HFbIpUVSuBMFUGMFhO18w3xvvzkReTZDCbb0QptZeq18hfnV09qkLguLHtdXtYmnH2NeTjpmModATt5e3k1l51lm20RENImRtyDyRbKZEETYM/pLI16QLMV1QVBNK9WdWFcnCI/neO2VjcwDzrm9wXI5xnSxoDMAZdkJHYXHYDoDapDFGaCSCwiEOwxwsffJEWwLl6HC/7cRjmN6D4jqZWB/tOpaYJtpvMUy1DePXNjiuHCxhGH7czLiKs5s45LsRETFdcDkLPU65TFF1SY73IORF/xra4uSe+NbS8SPPPusRq1+7Dd9P9I3Ew6kfQIHZT4J0nh9Qp+IFCa4/h0HS5jWfZSMMqQuhWrRODR2PC9ZwfKFd/Z9byoTSAXmNe69+XTXtm3We8mQ+tcN2c3mrH8/kbllJnbQ/XXUkBueVKdUyWaOPjq/ZYZLWup2Cu0Rft5jUUKZEdzZjbeds7EGxwS8qGKw4q6mJsK19DP6vx/oYrXD80DVAKk17x7n6FShyDkPRyU/KiSpAImw70tWveKI5h7kVh7aPVuBYb00kl6F+OfC9stZNtaO9UwGu/Re3vG0z3maYseRFZ61jvTXRMCl42c1G/CM1QErGbIfe2CcETr0VvJJoPXCOVrb60iqRQ32Gh2IB0Zp9uOUAP87UchF9eFD59ZC4W04hoI0LXdO4Be9bmVlGnxznvQi74wDHs+lhvCKCNYb/SA0+SdUluWaRX4sPLaloRlNpDyy/Hg7dcRjG3vSwDPHirBqeHanBr85r0/nh763xTiqHUJr2y8b+vjiVcrR0vu2Xjf2N8fJMnmKA3+XWRMXhPW+AtPYsv/72+JxR18//XoTFQ1lAc5zZ2KcGLs7yGz8fZTb2yQE5Wtq9Zwy+HrCAhuqiI83GPj1esYj/t7kXYfGghv/3uRdh8XhLvKKjzcYeA6A4axmDvwmkOPu8bxT/q4EM/5FmY48HPzfdmsgA8OrsOLOxxwQzzQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyy+D8IGRL/zABo7wAAAABJRU5ErkJggg==`

        },
        {
          label: 'Nuxt Js',
          // eslint-disable-next-line quotes
          value: `data:image/png;base64,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`
        }
      ],
      selectedImage: 0,
      tandatangan: '',
      rawData: dataSFDT
    }
  },
  computed: {
    penandatangan () {
      return this.tandatangan || 'Nama Orang'
    },
    watchedData () {
      return [this.selectedImage, this.penandatangan]
    }
  },
  watch: {
    watchedData: {
      handler () {
        console.log(this.rawData)
        this.rawData.images[0][0] = this.images[this.selectedImage].value
        this.rawData.sections[0].blocks[8].rows[2].cells[0].blocks[0].inlines[0].text = this.penandatangan
        const obj = this.$refs.doceditcontainer
        obj.open(this.rawData)
      },
      deep: true,
      immedite: true
    }
  },
  mounted () {
    // console.log(this.rawData)
    this.$nextTick(function () {
      const obj = this.$refs.doceditcontainer
      obj.open(this.rawData)
      obj.ej2Instances.selection.select('0;1;0', '0;1;100')
      const data = obj.ej2Instances.selection.selectParagraph()
      console.log('select data', data)
      // obj.open(require('../components/data.sfdt').default)
      obj.documentName = 'Getting Started'

      // const startOffset =
      //     this.$refs.doceditcontainer.ej2Instances.selection.startOffset
      // const endOffset = this.$refs.doceditcontainer.ej2Instances.selection.endOffset
      // console.log(startOffset, endOffset)

      console.log(this.$refs.doceditcontainer)
    })
  },
  methods: {
    updatedData () {
      this.rawData = JSON.parse(this.$refs.doceditcontainer.serialize())
      console.log(this.$refs.doceditcontainer.serialize())
    },
    updatedDataBadan () {
      JSON.parse(this.$refs.badan.serialize())
      console.log(this.$refs.badan.serialize())
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
