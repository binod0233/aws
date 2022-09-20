module.exports = ({ env }) => {
  return {
    seo: {
      enabled: true,
    },
    ckeditor: {
      enabled: true,
      config: {
        plugin: {
          // disable data-theme tag setting //
          // setAttribute:false,
          // disable strapi theme, will use default ckeditor theme //
          // strapiTheme:false,
          // styles applied to editor container (global scope) //
          // styles:`
          // :root{
          //   --ck-color-focus-border:red;
          //   --ck-color-text:red;
          // }
          // `
        },
        editor: {
          // editor default config

          // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
          // if you need markdown support and output set: removePlugins: [''],
          // default is
          removePlugins: ["Markdown"],

          // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
          toolbar: {
            items: [
              "paragraph",
              "heading1",
              "heading2",
              "|",
              "bold",
              "italic",
              "fontColor",
              "fontBackgroundColor",
              "fontFamily",
              "underline",
              "fontSize",
              "removeFormat",
              "|",
              "bulletedList",
              "todoList",
              "numberedList",
              "|",
              "alignment",
              "outdent",
              "indent",
              "horizontalLine",
              "|",
              "StrapiMediaLib",
              "insertTable",
              "blockQuote",
              "mediaEmbed",
              "link",
              "highlight",
              "|",
              "htmlEmbed",
              "sourceEditing",
              "code",
              "codeBlock",
              "|",
              "subscript",
              "superscript",
              "strikethrough",
              "specialCharacters",
              "|",
              "heading",
              "fullScreen",
              "undo",
              "redo",
            ],
          },
          link: {
            // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
            // addTargetToExternalLinks: true,
            //       decorators: {
            //         openInNewTab: {
            //             mode: 'manual',
            //             label: 'Open in a new tab',
            //             defaultValue: true,         // This option will be selected by default.
            //             attributes: {
            //                 target: '_blank',
            //                 rel: 'noopener noreferrer'
            //             }
            //         }
            //     }
            // }

            // Let the users control the "download" attribute of each link.
            decorators: [
              {
                mode: "manual",
                label: "noopener  _blank",
                defaultValue: false, // This option will be selected by default.
                attributes: {
                  target: "_blank",
                  rel: "noopener ",
                },
              },
              {
                mode: "manual",
                label: "noreferrer _blank ",
                defaultValue: false, // This option will be selected by default.
                attributes: {
                  target: "_blank",
                  rel: "noreferrer ",
                },
              },
              {
                mode: "manual",
                label: "dofollow  _blank",
                defaultValue: false, // This option will be selected by default.
                attributes: {
                  target: "_blank",
                  rel: "dofollow ",
                },
              },
              {
                mode: "manual",
                label: "nofollow  _blank",
                defaultValue: false, // This option will be selected by default.
                attributes: {
                  target: "_blank",
                  rel: "nofollow ",
                },
              },
              {
                mode: "manual",
                label: "noopener ",

                defaultValue: false, // This option will be selected by default.
                attributes: {
                  rel: "noopener ",
                },
              },
              {
                mode: "manual",
                label: "noreferrer ",

                defaultValue: false, // This option will be selected by default.
                attributes: {
                  rel: "noreferrer ",
                },
              },
              {
                mode: "manual",
                label: "dofollow ",

                defaultValue: false, // This option will be selected by default.
                attributes: {
                  rel: "dofollow ",
                },
              },
              {
                mode: "manual",
                label: "nofollow ",

                defaultValue: false, // This option will be selected by default.
                attributes: {
                  rel: "nofollow ",
                },
              },
            ],
          },

          // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
          fontSize: {
            options: [9, 11, 13, "default", 17, 19, 21, 27, 35],
            supportAllValues: false,
          },
          fontFamily: {
            options: [
              "default",
              "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
              "Courier New, Courier, monospace",
              "Georgia, serif",
              "Lucida Sans Unicode, Lucida Grande, sans-serif",
              "Tahoma, Geneva, sans-serif",
              "Times New Roman, Times, serif",
              "Trebuchet MS, Helvetica, sans-serif",
              "Verdana, Geneva, sans-serif",
              "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
            ],
            supportAllValues: true,
          },
          fontColor: {
            columns: 5,
            documentColors: 10,
          },
          fontBackgroundColor: {
            columns: 5,
            documentColors: 10,
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
          // default language: 'en',
          // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
          image: {
            resizeUnit: "%",
            resizeOptions: [
              {
                name: "resizeImage:original",
                value: null,
                icon: "original",
              },
              {
                name: "resizeImage:25",
                value: "25",
                icon: "small",
              },
              {
                name: "resizeImage:50",
                value: "50",
                icon: "medium",
              },
              {
                name: "resizeImage:75",
                value: "75",
                icon: "large",
              },
            ],
            toolbar: [
              "toggleImageCaption",
              "imageTextAlternative",
              "imageStyle:inline",
              "imageStyle:block",
              "imageStyle:side",
              "linkImage",
              "resizeImage:25",
              "resizeImage:50",
              "resizeImage:75",
              "resizeImage:original",
            ],
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
          table: {
            contentToolbar: [
              "tableColumn",
              "tableRow",
              "mergeTableCells",
              "tableCellProperties",
              "tableProperties",
              "toggleTableCaption",
            ],
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
              {
                model: "my_heading",
                view: {
                  name: "h2",
                  attributes: {
                    class: "my_heading_class",
                    id: Math.random(),
                  },
                },
                title: "My Heading",
                class: "ck-heading_heading2",
                // It needs to be converted before the standard 'heading2'.
                converterPriority: "high",
              },
            ],
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
          htmlSupport: {
            allow: [
              {
                name: "img",
                attributes: {
                  sizes: true,
                  loading: true,
                },
              },
              {
                name: "div",
                attributes: true,
              },
              {
                name: "h2",
                attributes: true,
                options: true,
              },
            ],
          },
        },
      },
    },
    //coludnary
    // upload: {
    //   config: {
    //     provider: "cloudinary",
    //     providerOptions: {
    //       cloud_name: env("CLOUDINARY_NAME"),
    //       api_key: env("CLOUDINARY_KEY"),
    //       api_secret: env("CLOUDINARY_SECRET"),
    //     },
    //     actionOptions: {
    //       upload: {},
    //       uploadStream: {},
    //       delete: {},
    //     },
    //   },
    // },
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
              Bucket: env('AWS_BUCKET_NAME'),
          },
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
        }
      },
    }
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          cdrservices: {
            field: "slug",
            references: "title",
          },
        },
      },
    },
    "generate-schema": {
      enabled: true,
    },
    "generate-data": {
      enabled: true,
    },
  };
};
