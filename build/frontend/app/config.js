angular.module("MovieStar.config", [])

.constant("vars", {
	"@gray-base": "#000",
	"@gray-darker": "lighten(@gray-base, 13.5%)",
	"@gray-dark": "lighten(@gray-base, 20%)",
	"@gray": "lighten(@gray-base, 33.5%)",
	"@gray-light": "lighten(@gray-base, 46.7%)",
	"@gray-lighter": "lighten(@gray-base, 93.5%)",
	"@brand-primary": "darken(#428bca, 6.5%)",
	"@brand-success": "#5cb85c",
	"@brand-info": "#5bc0de",
	"@brand-warning": "#f0ad4e",
	"@brand-danger": "#d9534f",
	"@body-bg": "#fff",
	"@text-color": "@gray-dark",
	"@link-color": "@brand-primary",
	"@link-hover-color": "darken(@link-color, 15%)",
	"@link-hover-decoration": "underline",
	"@font-family-sans-serif": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
	"@font-family-serif": "Georgia, \"Times New Roman\", Times, serif",
	"@font-family-monospace": "Menlo, Monaco, Consolas, \"Courier New\", monospace",
	"@font-family-base": "@font-family-sans-serif",
	"@font-size-base": "14px",
	"@font-size-large": "ceil((@font-size-base * 1.25))",
	"@font-size-small": "ceil((@font-size-base * 0.85))",
	"@font-size-h1": "floor((@font-size-base * 2.6))",
	"@font-size-h2": "floor((@font-size-base * 2.15))",
	"@font-size-h3": "ceil((@font-size-base * 1.7))",
	"@font-size-h4": "ceil((@font-size-base * 1.25))",
	"@font-size-h5": "@font-size-base",
	"@font-size-h6": "ceil((@font-size-base * 0.85))",
	"@line-height-base": "1.428571429",
	"@line-height-computed": "floor((@font-size-base * @line-height-base))",
	"@headings-font-family": "inherit",
	"@headings-font-weight": "500",
	"@headings-line-height": "1.1",
	"@headings-color": "inherit",
	"@icon-font-path": "\"../fonts/\"",
	"@icon-font-name": "\"glyphicons-halflings-regular\"",
	"@icon-font-svg-id": "\"glyphicons_halflingsregular\"",
	"@padding-base-vertical": "6px",
	"@padding-base-horizontal": "12px",
	"@padding-large-vertical": "10px",
	"@padding-large-horizontal": "16px",
	"@padding-small-vertical": "5px",
	"@padding-small-horizontal": "10px",
	"@padding-xs-vertical": "1px",
	"@padding-xs-horizontal": "5px",
	"@line-height-large": "1.3333333",
	"@line-height-small": "1.5",
	"@border-radius-base": "4px",
	"@border-radius-large": "6px",
	"@border-radius-small": "3px",
	"@component-active-color": "#fff",
	"@component-active-bg": "@brand-primary",
	"@caret-width-base": "4px",
	"@caret-width-large": "5px",
	"@table-cell-padding": "8px",
	"@table-condensed-cell-padding": "5px",
	"@table-bg": "transparent",
	"@table-bg-accent": "#f9f9f9",
	"@table-bg-hover": "#f5f5f5",
	"@table-bg-active": "@table-bg-hover",
	"@table-border-color": "#ddd",
	"@btn-font-weight": "normal",
	"@btn-default-color": "#333",
	"@btn-default-bg": "#fff",
	"@btn-default-border": "#ccc",
	"@btn-primary-color": "#fff",
	"@btn-primary-bg": "@brand-primary",
	"@btn-primary-border": "darken(@btn-primary-bg, 5%)",
	"@btn-success-color": "#fff",
	"@btn-success-bg": "@brand-success",
	"@btn-success-border": "darken(@btn-success-bg, 5%)",
	"@btn-info-color": "#fff",
	"@btn-info-bg": "@brand-info",
	"@btn-info-border": "darken(@btn-info-bg, 5%)",
	"@btn-warning-color": "#fff",
	"@btn-warning-bg": "@brand-warning",
	"@btn-warning-border": "darken(@btn-warning-bg, 5%)",
	"@btn-danger-color": "#fff",
	"@btn-danger-bg": "@brand-danger",
	"@btn-danger-border": "darken(@btn-danger-bg, 5%)",
	"@btn-link-disabled-color": "@gray-light",
	"@btn-border-radius-base": "@border-radius-base",
	"@btn-border-radius-large": "@border-radius-large",
	"@btn-border-radius-small": "@border-radius-small",
	"@input-bg": "#fff",
	"@input-bg-disabled": "@gray-lighter",
	"@input-color": "@gray",
	"@input-border": "#ccc",
	"@input-border-radius": "@border-radius-base",
	"@input-border-radius-large": "@border-radius-large",
	"@input-border-radius-small": "@border-radius-small",
	"@input-border-focus": "#66afe9",
	"@input-color-placeholder": "#999",
	"@input-height-base": "(@line-height-computed + (@padding-base-vertical * 2) + 2)",
	"@input-height-large": "(ceil(@font-size-large * @line-height-large) + (@padding-large-vertical * 2) + 2)",
	"@input-height-small": "(floor(@font-size-small * @line-height-small) + (@padding-small-vertical * 2) + 2)",
	"@form-group-margin-bottom": "15px",
	"@legend-color": "@gray-dark",
	"@legend-border-color": "#e5e5e5",
	"@input-group-addon-bg": "@gray-lighter",
	"@input-group-addon-border-color": "@input-border",
	"@cursor-disabled": "not-allowed",
	"@dropdown-bg": "#fff",
	"@dropdown-border": "rgba(0,0,0,.15)",
	"@dropdown-fallback-border": "#ccc",
	"@dropdown-divider-bg": "#e5e5e5",
	"@dropdown-link-color": "@gray-dark",
	"@dropdown-link-hover-color": "darken(@gray-dark, 5%)",
	"@dropdown-link-hover-bg": "#f5f5f5",
	"@dropdown-link-active-color": "@component-active-color",
	"@dropdown-link-active-bg": "@component-active-bg",
	"@dropdown-link-disabled-color": "@gray-light",
	"@dropdown-header-color": "@gray-light",
	"@dropdown-caret-color": "#000",
	"@screen-xs": "480px",
	"@screen-xs-min": "@screen-xs",
	"@screen-phone": "@screen-xs-min",
	"@screen-sm": "768px",
	"@screen-sm-min": "@screen-sm",
	"@screen-tablet": "@screen-sm-min",
	"@screen-md": "992px",
	"@screen-md-min": "@screen-md",
	"@screen-desktop": "@screen-md-min",
	"@screen-lg": "1200px",
	"@screen-lg-min": "@screen-lg",
	"@screen-lg-desktop": "@screen-lg-min",
	"@screen-xs-max": "(@screen-sm-min - 1)",
	"@screen-sm-max": "(@screen-md-min - 1)",
	"@screen-md-max": "(@screen-lg-min - 1)",
	"@grid-columns": "12",
	"@grid-gutter-width": "30px",
	"@grid-float-breakpoint": "@screen-sm-min",
	"@grid-float-breakpoint-max": "(@grid-float-breakpoint - 1)",
	"@container-tablet": "(720px + @grid-gutter-width)",
	"@container-sm": "@container-tablet",
	"@container-desktop": "(940px + @grid-gutter-width)",
	"@container-md": "@container-desktop",
	"@container-large-desktop": "(1140px + @grid-gutter-width)",
	"@container-lg": "@container-large-desktop",
	"@navbar-height": "50px",
	"@navbar-margin-bottom": "@line-height-computed",
	"@navbar-border-radius": "@border-radius-base",
	"@navbar-padding-horizontal": "floor((@grid-gutter-width / 2))",
	"@navbar-padding-vertical": "((@navbar-height - @line-height-computed) / 2)",
	"@navbar-collapse-max-height": "340px",
	"@navbar-default-color": "#777",
	"@navbar-default-bg": "#f8f8f8",
	"@navbar-default-border": "darken(@navbar-default-bg, 6.5%)",
	"@navbar-default-link-color": "#777",
	"@navbar-default-link-hover-color": "#333",
	"@navbar-default-link-hover-bg": "transparent",
	"@navbar-default-link-active-color": "#555",
	"@navbar-default-link-active-bg": "darken(@navbar-default-bg, 6.5%)",
	"@navbar-default-link-disabled-color": "#ccc",
	"@navbar-default-link-disabled-bg": "transparent",
	"@navbar-default-brand-color": "@navbar-default-link-color",
	"@navbar-default-brand-hover-color": "darken(@navbar-default-brand-color, 10%)",
	"@navbar-default-brand-hover-bg": "transparent",
	"@navbar-default-toggle-hover-bg": "#ddd",
	"@navbar-default-toggle-icon-bar-bg": "#888",
	"@navbar-default-toggle-border-color": "#ddd",
	"@navbar-inverse-color": "lighten(@gray-light, 15%)",
	"@navbar-inverse-bg": "#222",
	"@navbar-inverse-border": "darken(@navbar-inverse-bg, 10%)",
	"@navbar-inverse-link-color": "lighten(@gray-light, 15%)",
	"@navbar-inverse-link-hover-color": "#fff",
	"@navbar-inverse-link-hover-bg": "transparent",
	"@navbar-inverse-link-active-color": "@navbar-inverse-link-hover-color",
	"@navbar-inverse-link-active-bg": "darken(@navbar-inverse-bg, 10%)",
	"@navbar-inverse-link-disabled-color": "#444",
	"@navbar-inverse-link-disabled-bg": "transparent",
	"@navbar-inverse-brand-color": "@navbar-inverse-link-color",
	"@navbar-inverse-brand-hover-color": "#fff",
	"@navbar-inverse-brand-hover-bg": "transparent",
	"@navbar-inverse-toggle-hover-bg": "#333",
	"@navbar-inverse-toggle-icon-bar-bg": "#fff",
	"@navbar-inverse-toggle-border-color": "#333",
	"@nav-link-padding": "10px 15px",
	"@nav-link-hover-bg": "@gray-lighter",
	"@nav-disabled-link-color": "@gray-light",
	"@nav-disabled-link-hover-color": "@gray-light",
	"@nav-tabs-border-color": "#ddd",
	"@nav-tabs-link-hover-border-color": "@gray-lighter",
	"@nav-tabs-active-link-hover-bg": "@body-bg",
	"@nav-tabs-active-link-hover-color": "@gray",
	"@nav-tabs-active-link-hover-border-color": "#ddd",
	"@nav-tabs-justified-link-border-color": "#ddd",
	"@nav-tabs-justified-active-link-border-color": "@body-bg",
	"@nav-pills-border-radius": "@border-radius-base",
	"@nav-pills-active-link-hover-bg": "@component-active-bg",
	"@nav-pills-active-link-hover-color": "@component-active-color",
	"@pagination-color": "@link-color",
	"@pagination-bg": "#fff",
	"@pagination-border": "#ddd",
	"@pagination-hover-color": "@link-hover-color",
	"@pagination-hover-bg": "@gray-lighter",
	"@pagination-hover-border": "#ddd",
	"@pagination-active-color": "#fff",
	"@pagination-active-bg": "@brand-primary",
	"@pagination-active-border": "@brand-primary",
	"@pagination-disabled-color": "@gray-light",
	"@pagination-disabled-bg": "#fff",
	"@pagination-disabled-border": "#ddd",
	"@pager-bg": "@pagination-bg",
	"@pager-border": "@pagination-border",
	"@pager-border-radius": "15px",
	"@pager-hover-bg": "@pagination-hover-bg",
	"@pager-active-bg": "@pagination-active-bg",
	"@pager-active-color": "@pagination-active-color",
	"@pager-disabled-color": "@pagination-disabled-color",
	"@jumbotron-padding": "30px",
	"@jumbotron-color": "inherit",
	"@jumbotron-bg": "@gray-lighter",
	"@jumbotron-heading-color": "inherit",
	"@jumbotron-font-size": "ceil((@font-size-base * 1.5))",
	"@jumbotron-heading-font-size": "ceil((@font-size-base * 4.5))",
	"@state-success-text": "#3c763d",
	"@state-success-bg": "#dff0d8",
	"@state-success-border": "darken(spin(@state-success-bg, -10), 5%)",
	"@state-info-text": "#31708f",
	"@state-info-bg": "#d9edf7",
	"@state-info-border": "darken(spin(@state-info-bg, -10), 7%)",
	"@state-warning-text": "#8a6d3b",
	"@state-warning-bg": "#fcf8e3",
	"@state-warning-border": "darken(spin(@state-warning-bg, -10), 5%)",
	"@state-danger-text": "#a94442",
	"@state-danger-bg": "#f2dede",
	"@state-danger-border": "darken(spin(@state-danger-bg, -10), 5%)",
	"@tooltip-max-width": "200px",
	"@tooltip-color": "#fff",
	"@tooltip-bg": "#000",
	"@tooltip-opacity": ".9",
	"@tooltip-arrow-width": "5px",
	"@tooltip-arrow-color": "@tooltip-bg",
	"@popover-bg": "#fff",
	"@popover-max-width": "276px",
	"@popover-border-color": "rgba(0,0,0,.2)",
	"@popover-fallback-border-color": "#ccc",
	"@popover-title-bg": "darken(@popover-bg, 3%)",
	"@popover-arrow-width": "10px",
	"@popover-arrow-color": "@popover-bg",
	"@popover-arrow-outer-width": "(@popover-arrow-width + 1)",
	"@popover-arrow-outer-color": "fadein(@popover-border-color, 5%)",
	"@popover-arrow-outer-fallback-color": "darken(@popover-fallback-border-color, 20%)",
	"@label-default-bg": "@gray-light",
	"@label-primary-bg": "@brand-primary",
	"@label-success-bg": "@brand-success",
	"@label-info-bg": "@brand-info",
	"@label-warning-bg": "@brand-warning",
	"@label-danger-bg": "@brand-danger",
	"@label-color": "#fff",
	"@label-link-hover-color": "#fff",
	"@modal-inner-padding": "15px",
	"@modal-title-padding": "15px",
	"@modal-title-line-height": "@line-height-base",
	"@modal-content-bg": "#fff",
	"@modal-content-border-color": "rgba(0,0,0,.2)",
	"@modal-content-fallback-border-color": "#999",
	"@modal-backdrop-bg": "#000",
	"@modal-backdrop-opacity": ".5",
	"@modal-header-border-color": "#e5e5e5",
	"@modal-footer-border-color": "@modal-header-border-color",
	"@modal-lg": "900px",
	"@modal-md": "600px",
	"@modal-sm": "300px",
	"@alert-padding": "15px",
	"@alert-border-radius": "@border-radius-base",
	"@alert-link-font-weight": "bold",
	"@alert-success-bg": "@state-success-bg",
	"@alert-success-text": "@state-success-text",
	"@alert-success-border": "@state-success-border",
	"@alert-info-bg": "@state-info-bg",
	"@alert-info-text": "@state-info-text",
	"@alert-info-border": "@state-info-border",
	"@alert-warning-bg": "@state-warning-bg",
	"@alert-warning-text": "@state-warning-text",
	"@alert-warning-border": "@state-warning-border",
	"@alert-danger-bg": "@state-danger-bg",
	"@alert-danger-text": "@state-danger-text",
	"@alert-danger-border": "@state-danger-border",
	"@progress-bg": "#f5f5f5",
	"@progress-bar-color": "#fff",
	"@progress-border-radius": "@border-radius-base",
	"@progress-bar-bg": "@brand-primary",
	"@progress-bar-success-bg": "@brand-success",
	"@progress-bar-warning-bg": "@brand-warning",
	"@progress-bar-danger-bg": "@brand-danger",
	"@progress-bar-info-bg": "@brand-info",
	"@list-group-bg": "#fff",
	"@list-group-border": "#ddd",
	"@list-group-border-radius": "@border-radius-base",
	"@list-group-hover-bg": "#f5f5f5",
	"@list-group-active-color": "@component-active-color",
	"@list-group-active-bg": "@component-active-bg",
	"@list-group-active-border": "@list-group-active-bg",
	"@list-group-active-text-color": "lighten(@list-group-active-bg, 40%)",
	"@list-group-disabled-color": "@gray-light",
	"@list-group-disabled-bg": "@gray-lighter",
	"@list-group-disabled-text-color": "@list-group-disabled-color",
	"@list-group-link-color": "#555",
	"@list-group-link-hover-color": "@list-group-link-color",
	"@list-group-link-heading-color": "#333",
	"@panel-bg": "#fff",
	"@panel-body-padding": "15px",
	"@panel-heading-padding": "10px 15px",
	"@panel-footer-padding": "@panel-heading-padding",
	"@panel-border-radius": "@border-radius-base",
	"@panel-inner-border": "#ddd",
	"@panel-footer-bg": "#f5f5f5",
	"@panel-default-text": "@gray-dark",
	"@panel-default-border": "#ddd",
	"@panel-default-heading-bg": "#f5f5f5",
	"@panel-primary-text": "#fff",
	"@panel-primary-border": "@brand-primary",
	"@panel-primary-heading-bg": "@brand-primary",
	"@panel-success-text": "@state-success-text",
	"@panel-success-border": "@state-success-border",
	"@panel-success-heading-bg": "@state-success-bg",
	"@panel-info-text": "@state-info-text",
	"@panel-info-border": "@state-info-border",
	"@panel-info-heading-bg": "@state-info-bg",
	"@panel-warning-text": "@state-warning-text",
	"@panel-warning-border": "@state-warning-border",
	"@panel-warning-heading-bg": "@state-warning-bg",
	"@panel-danger-text": "@state-danger-text",
	"@panel-danger-border": "@state-danger-border",
	"@panel-danger-heading-bg": "@state-danger-bg",
	"@thumbnail-padding": "4px",
	"@thumbnail-bg": "@body-bg",
	"@thumbnail-border": "#ddd",
	"@thumbnail-border-radius": "@border-radius-base",
	"@thumbnail-caption-color": "@text-color",
	"@thumbnail-caption-padding": "9px",
	"@well-bg": "#f5f5f5",
	"@well-border": "darken(@well-bg, 7%)",
	"@badge-color": "#fff",
	"@badge-link-hover-color": "#fff",
	"@badge-bg": "@gray-light",
	"@badge-active-color": "@link-color",
	"@badge-active-bg": "#fff",
	"@badge-font-weight": "bold",
	"@badge-line-height": "1",
	"@badge-border-radius": "10px",
	"@breadcrumb-padding-vertical": "8px",
	"@breadcrumb-padding-horizontal": "15px",
	"@breadcrumb-bg": "#f5f5f5",
	"@breadcrumb-color": "#ccc",
	"@breadcrumb-active-color": "@gray-light",
	"@breadcrumb-separator": "\"/\"",
	"@carousel-text-shadow": "0 1px 2px rgba(0,0,0,.6)",
	"@carousel-control-color": "#fff",
	"@carousel-control-width": "15%",
	"@carousel-control-opacity": ".5",
	"@carousel-control-font-size": "20px",
	"@carousel-indicator-active-bg": "#fff",
	"@carousel-indicator-border-color": "#fff",
	"@carousel-caption-color": "#fff",
	"@close-font-weight": "bold",
	"@close-color": "#000",
	"@close-text-shadow": "0 1px 0 #fff",
	"@code-color": "#c7254e",
	"@code-bg": "#f9f2f4",
	"@kbd-color": "#fff",
	"@kbd-bg": "#333",
	"@pre-bg": "#f5f5f5",
	"@pre-color": "@gray-dark",
	"@pre-border-color": "#ccc",
	"@pre-scrollable-max-height": "340px",
	"@component-offset-horizontal": "180px",
	"@text-muted": "@gray-light",
	"@abbr-border-color": "@gray-light",
	"@headings-small-color": "@gray-light",
	"@blockquote-small-color": "@gray-light",
	"@blockquote-font-size": "(@font-size-base * 1.25)",
	"@blockquote-border-color": "@gray-lighter",
	"@page-header-border-color": "@gray-lighter",
	"@dl-horizontal-offset": "@component-offset-horizontal",
	"@dl-horizontal-breakpoint": "@grid-float-breakpoint",
	"@hr-border": "@gray-lighter"
})

.constant("css", [
	"print.less",
	"type.less",
	"code.less",
	"grid.less",
	"tables.less",
	"forms.less",
	"buttons.less",
	"responsive-utilities.less",
	"glyphicons.less",
	"button-groups.less",
	"input-groups.less",
	"navs.less",
	"navbar.less",
	"breadcrumbs.less",
	"pagination.less",
	"pager.less",
	"labels.less",
	"badges.less",
	"jumbotron.less",
	"thumbnails.less",
	"alerts.less",
	"progress-bars.less",
	"media.less",
	"list-group.less",
	"panels.less",
	"responsive-embed.less",
	"wells.less",
	"close.less",
	"component-animations.less",
	"dropdowns.less",
	"tooltip.less",
	"popovers.less",
	"modals.less",
	"carousel.less"
])

.constant("js", [])

.constant("customizerUrl", "http://getbootstrap.com/customize/?id=0515989d6def156a4c48a32d7a204187")

;