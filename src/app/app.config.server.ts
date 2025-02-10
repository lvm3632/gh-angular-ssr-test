import {mergeApplicationConfig, ApplicationConfig} from '@angular/core';
import {provideServerRendering} from '@angular/platform-server';
import {appConfig} from './app.config';
import {
    HttpClientModule,
    HttpRequest,
    provideHttpClient,
    withFetch,
    withInterceptorsFromDi
} from "@angular/common/http";
import {provideClientHydration, withEventReplay, withHttpTransferCacheOptions} from "@angular/platform-browser";

const serverConfig: ApplicationConfig = {
    providers: [

        provideServerRendering(),
        provideClientHydration(
            withEventReplay(),
            withHttpTransferCacheOptions({
                filter: (req: HttpRequest<unknown>) => true, // to filter
                includeHeaders: [], // to include headers
                includePostRequests: true, // to include POST
                includeRequestsWithAuthHeaders: false, // to include with auth
            })
        ),
    ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
