import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './LayoutProps';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit{
  props: LayoutProps = { title: '', subTitle: '' };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.props = this.getProperties();
  }

  getProperties(): LayoutProps {
    let child = this.activatedRoute.firstChild

    while(child?.firstChild){
      child = child.firstChild;
    }

    return child?.snapshot.data as LayoutProps;
  }
}
