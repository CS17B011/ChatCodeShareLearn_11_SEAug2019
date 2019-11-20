#include<bits/stdc++.h>
using namespace std;

class setD
{
    int *height;
    int *parent;
    int num;
public:
    setD(int);
    int find(int);
    void unionp(int,int);
};

setD::setD(int n)
{
    height = new int[n];
    parent = new int[n];
    num = n;
    for(int i=0;i<n;++i)
        parent[i] = i;
}

int setD::find(int a)
{
    if(parent[a]!=a)
    {
        parent[a] = find(parent[a]);
    }
    return parent[a];
}

void setD::unionp(int a,int b)
{
    int pa = find(a);
    int pb = find(b);

    if(pa==pb)
        return ;

    if(height[pa]<height[pb])
        parent[pa] = pb;
    else if(height[pa]>height[pb])
        parent[pb] = pa;
    else
    {
        parent[pb] = pa;
        height[pa] += 1; 
    }
}

struct edge
{
    int c,a,b;
};


int findmaxdfs(int s,int d,vector<vector<pair<int,int>>> &Tree)
{
    int n=Tree.size();
    bool visited[n];
    for(int i=0;i<n;++i)
        visited[i] = false;
    visited[s] = true;
    vector<pair<int,int>> v;
    pair<int,int> p;
    queue<pair<int,int>> q;
    q.push({s,INT_MIN});
    while(q.size()>0)
    {
        p = q.front();
        q.pop();
        if(p.first==d)
            return p.second;
        v = Tree.at(p.first);
        visited[p.first] = true;
        for(auto p1:v)
        {
            if(!visited[p1.first])
                q.push({p1.first,max(p1.second,p.second)});
        }
    }
    return INT_MIN;
}


bool cmp(edge a,edge b)
{
    return (b.c < a.c);
}

void findPath(vector<edge> v,int n,int m)
{
    vector<vector<pair<int,int>>> Tree(n);
    setD S(n);
    sort(v.begin(),v.end(),cmp);
    int minCost = 0;
    vector<edge> v1;
    bool visited[n];
    for(int i=0;i<n;++i)
        visited[i] = false;
    for(int i=0;i<m;++i)
    {
        edge x = v.at(v.size()-1);
        v.pop_back();
        if(S.find(x.a)!=S.find(x.b))
        {
            cout << x.a << " " << x.b << " " << x.c << endl;
            Tree.at(x.a).push_back({x.b,x.c});
            Tree.at(x.b).push_back({x.a,x.c});
            S.unionp(x.a,x.b);
            minCost += x.c;
        }
        else
            v1.push_back(x);
    }
    sort(v1.begin(),v1.end(),cmp);
    cout << "------------------------------------------------------" << endl;
    for(auto i:v1)
        cout << i.a << " " << i.b << " " << i.c << endl;
    edge x = v1.at(v1.size()-1);
    bool flag = false;
    int smin = minCost - findmaxdfs(x.a,x.b,Tree) + x.c;
    cout << "------------------------------------------------------" << endl;
    cout << minCost << " " << smin << endl;
}

int main()
{
    int T,n,m,a,b,c;
    cin >> T;
    while(T--)
    {
        cin >> n >> m;
        vector<edge> v;
        for(int i=0;i<m;++i)
        {
            cin >> a >> b >> c;
            v.push_back({c,a-1,b-1});
        }
        findPath(v,n,m);
        cout << "------------------------------------------------------" << endl; 
    }
    return 0;
}