import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  singlePerson: any = [];
  images: string[] = [];
  constructor() { }

  ngOnInit(): void {
    const jsonData = localStorage.getItem('treeData');
    if (jsonData) {
      this.TreeData = JSON.parse(jsonData);
      this.singlePerson.push(this.TreeData[0].data);
    }
  }
  dataArr: any = [];
  selectedNodes: TreeNode[];

  expandedNodes: any[] = [];
  
  getFilteredTreeData(): TreeNode[] {
    const selectedNode = this.TreeData.find(node => this.expandedNodes.includes(node.data.id));
    if (selectedNode) {
      return [selectedNode];
    } else {
      return this.TreeData;
    }
  }
  expandNode(nodeId: number) {
    if (this.expandedNodes.includes(nodeId)) {
      this.expandedNodes = this.expandedNodes.filter(id => id !== nodeId);
    } else {
      this.expandedNodes.push(nodeId);
    }
  }

  TreeData: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      label: 'AMARENDRA BAHUBALI',
      data: {
        image: '/assets/Image/Amarendra1.jpg',
        images: [
          '/assets/Image/Amarendra1.jpg',
          '/assets/Image/amarendra2.webp',
        ],
        id: 1,
        name: 'AMARENDRA BAHUBALI',
        title: 'Prince, Hero',
        relationships: [2, 4],
        about: 'Amarendra Baahubali is the son of king Vikramadeva and Akhila',
        Age: 60,
        height: '6 feets',
        gender: 'Male',
        bodyType: 'wet Build',
        weight: '90 kg'
      },
      children: [
        {
          expanded: true,
          type: 'person',
          label: 'DEVASENA',
          data: {
            image: '/assets/Image/devsena1.jpg',
            images: [
              '/assets/Image/devsena1.jpg',
              '/assets/Image/devsena2.jpeg',
            ],
            id: 2,
            name: 'DEVASENA',
            title: 'Heroine',
            relationships: [2, 5],
            about: 'Devasena keeps her head high, made her own decisions and was fearless in the face of danger.',
            Age: 60,
            height: '5.5 feets',
            gender: 'female',
            bodyType: 'Mesomorph',
            weight: '56 kg'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              label: 'BIJJALADEVA',
              data: {
                image: '/assets/Image/bijjaladev1.jpeg',
                images: [
                  '/assets/Image/bijjaladev1.jpeg',
                  '/assets/Image/bijjaladev2.jpg',
                ],
                id: 3,
                name: 'BIJJALADEVA',
                title: 'King, Villian',
                relationships: [2, 4, 5],
                about: 'Bijjaladeva, the deranged older brother of Vikramadeva and rejected prince, who has a deformed left arm.',
                Age: 90,
                height: '6 feets',
                gender: 'Male',
                bodyType: 'wet Build',
                weight: '80 kg'
              },
            },
            {
              expanded: true,
              type: 'person',
              label: 'KUMAR VERMA',
              data: {
                image: '/assets/Image/kumarverma1.jpg',
                images: [
                  '/assets/Image/kumarverma1.jpg',
                  '/assets/Image/Kumaravarma2.webp',
                ],
                id: 4,
                name: 'KUMAR VERMA',
                title: 'Prince',
                relationships: [2, 3, 4, 5],
                about: 'Kumar verma was brother of Devsena.',
                Age: 65,
                height: '6 feets',
                gender: 'Male',
                bodyType: 'wet Build',
                weight: '90 kg'
              },
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          label: 'SIVGAMI',
          data: {
            image: '/assets/Image/shivgaami1.jpeg',
            images: [
              '/assets/Image/shivgaami1.jpeg',
              '/assets/Image/shivgami2.jpg',
            ],
            id: 5,
            name: 'SIVGAMI',
            title: 'Queen',
            relationships: [2, 3, 4, 6],
            about: 'Sivagami is one of the most powerful and skilled characters in Baahubali series who decides the fate of Mahismathi.',
            Age: 85,
            height: '5 feets',
            gender: 'female',
            bodyType: 'Null',
            weight: '74 kg'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              label: 'BHALLADEVA',
              data: {
                image: '/assets/Image/bhallaladev1.jpeg',
                images: [
                  '/assets/Image/bhallaladev1.jpeg',
                  '/assets/Image/bhallaldev2.jpg',
                ],
                id: 6,
                name: 'BHALLADEVA',
                title: 'Prince, Villian',
                relationships: [2, 4, 5, 3],
                about: 'Bhallaladeva is the king of Mahishmati. He is a renowned fighter, Sivagami and Bijjaladeva\'s only child and the older cousin-brother of Amarendra Bahubali.',
                Age: 65,
                height: '6 feets',
                gender: 'Male',
                bodyType: 'wet Build',
                weight: '90 kg'
              },
            },
          ]
        },
        {
          expanded: true,
          type: 'person',
          label: 'MAHENDRA BAHUBALI',
          data: {
            image: '/assets/Image/mahendra2.jpg',
            images: [
              '/assets/Image/mahendra1.jpg',
              '/assets/Image/mahendra2.jpg',
            ],
            id: 7,
            name: 'MAHENDRA BAHUBALI',
            title: 'Hero',
            relationships: [2, 4, 6, 3],
            about: 'Mahendra Baahubali is the son of the late king Amarendra Baahubali. He is the spitting image of Amarendra Baahubali',
            Age: 50,
            height: '6 feets',
            gender: 'Male',
            bodyType: 'wet Build',
            weight: '90 kg'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              label: 'KATAPPA',
              data: {
                image: '/assets/Image/katappa1.png',
                images: [
                  '/assets/Image/katappa1.png',
                  '/assets/Image/katappa2.jpeg',
                ],
                id: 8,
                name: 'KATAPPA',
                title: 'Minister',
                relationships: [1, 2, 4, 6],
                about: 'Kattappa is loyal army chief of Mahishmati kingdom.',
                Age: 75,
                height: '6 feets',
                gender: 'Male',
                bodyType: 'wet Build',
                weight: '95 kg'
              }
            },
            {
              expanded: true,
              type: 'person',
              label: 'AVANTIKA',
              data: {
                image: '/assets/Image/avantika1.jpg',
                images: [
                  '/assets/Image/avantika1.jpg',
                  '/assets/Image/avantika2.jpeg',
                ],
                id: 9,
                name: 'AVANTIKA',
                title: 'Princess',
                relationships: [2, 4, 6],
                about: 'wife of Mahendra bahubali.',
                Age: 65,
                height: '5.5 feets',
                gender: 'female',
                bodyType: 'wet Build',
                weight: '50 kg'
              }
            },
          ]
        }
      ]
    }
  ];

  findNodeLabelById(nodeId: number): string {
    const foundNode = this.findNodeById(nodeId);
    return foundNode ? foundNode.label : '';
  }

  findNodeById(nodeId: number, nodes: TreeNode[] = this.TreeData): TreeNode | undefined {
    for (const node of nodes) {
      if (node.data && node.data.id === nodeId) {
        return node;
      }
      if (node.children) {
        const foundNode = this.findNodeById(nodeId, node.children);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return undefined;
  }

  getDetail = (data_: any) => {
    const selectedNode = this.findNodeById(data_.data.id);
    this.selectedNodes = [selectedNode];
    this.updateChart(selectedNode);
  };
  
  updateChart(selectedNode: TreeNode) {
    this.TreeData.forEach(node => this.collapseNode(node));
    this.expandNodeAndRelated(selectedNode);
  }
  
  collapseNode(node: TreeNode) {
    node.expanded = false;
    if (node.children) {
      node.children.forEach(child => this.collapseNode(child));
    }
  }
  
  expandNodeAndRelated(node: TreeNode) {
    node.expanded = true;
    if (node.data && node.data.relationships) {
      node.data.relationships.forEach(relatedNodeId => {
        const relatedNode = this.findNodeById(relatedNodeId);
        if (relatedNode) {
          relatedNode.expanded = true;
          this.expandNodeAndRelated(relatedNode);
        }
      });
    }
  }
}