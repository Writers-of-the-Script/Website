declare namespace Ion {
    interface FooterLink {
        text: string;
        href: string;
        newTab?: boolean;
    }

    interface FooterIcon {
        name: string;
        href: string;
        newTab?: boolean;
    }

    interface FooterOptions {
        text: string;
        links?: FooterLink[];
        icons?: FooterIcon[];
    }

    interface IonConfig {
        /**
         * Options passed to `astro-icon`. When setting the `iconDir` option, you must use the `resolve` function exported from this module to resolve the path.
         *
         * For more information, see the [astro-icon documentation](https://astroicon.dev).
         */
        icons: Parameters<typeof import("astro-icon").default>[0];
        /**
         * Whether to use the custom EC theme. Defaults to `true`. Setting this to false will both remove the custom EC theme and the custom CSS.
         */
        useCustomECTheme?: boolean;
        /**
         * The footer options for the site. If not provided, the footer will not be shown.
         */
        footer?: FooterOptions;
        /**
         * Allows you to disable specific overrides. Defaults to `true` for all overrides.
         */
        overrides?: {
            /**
             * Set to `false` to disable Ion's custom SiteTitle override. Defaults to `true`.
             */
            SiteTitle?: boolean;
            /**
             * Set to `false` to disable Ion's Sidebar override. When set to `true`, you will not be able to use sidebar icons anymore.
             */
            Sidebar?: boolean;
            /**
             * Set to `false` to hide Ion's footer. Defaults to `true`.
             */
            Pagination?: boolean;
            /**
             * Set to `false` to disable Ion's hero override. Defaults to `true`.
             */
            Hero?: boolean;
            /**
             * Set to `false` to disable Ion's head override. Defaults to `true`.
             */
            Head?: boolean;
            /**
             * Set to `false` to disable Ion's page title override. Defaults to `true`.
             */
            PageTitle?: boolean;
        };
    }
}

declare module "ion:globals" {
    /**
     * Whether or not to use icons.
     */
    export const icons: boolean;
    /**
     * Options for the footer.
     */
    export const footer: Ion.FooterOptions | undefined;
}
