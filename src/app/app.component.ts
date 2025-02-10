import {afterNextRender, afterRender, Component, ElementRef, inject, Injectable, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {JsonPipe} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, JsonPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
@Injectable({providedIn: "root"})
export class AppComponent {

    users: any;

    private readonly title = inject(Title);
    private readonly meta = inject(Meta);
    @ViewChild('content') contentRef!: ElementRef;


    constructor(private http: HttpClient) {
        this.title.setTitle("My fancy page/route title. Ideal length 60-70 chars");
        this.meta.addTag({name: "description", content: "My fancy meta description. Ideal length 120-150 characters."});
        afterRender(() => {
            // Safe to check `scrollHeight` because this will only run in the browser, not the server.
            console.log('content height: ' + this.contentRef.nativeElement.scrollHeight);

            http.get<any>('/api/users').subscribe(users => {
                // process the configuration.
                this.users = users;
            });

        });
    }


}
