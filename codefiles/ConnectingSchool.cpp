#include<bits/stdc++.h>
using namespace std;

void bfs(vector<vector<pair<int,int>>> &v,queue<pair<int,int>> &q,int dist[],bool visited[][2],bool vshort[])
{
    pair<int,int> p;
    int d = 0;
    while(q.size()>1)
    {
        p = q.front();
        q.pop();
        if(p.second==-2)
        {
            ++d;
            q.push({0,-2});
            continue;
        }
        if(p.second!=-1)
            visited[p.first][p.second] = true;
        for(auto p1:v.at(p.first))
        {
            if(!visited[p1.first][p1.second] && p1.second!=p.second)
            {
                q.push(p1);
                if(!vshort[p1.first])
                {
                    dist[p1.first] = d+1;
                    vshort[p1.first] = true;
                }                    
            }
        }        
    }
}

void findShortestPath(vector<vector<pair<int,int>>> &v,int s)
{
    bool visited[v.size()][2];
    bool vshort[v.size()];
    int dist[v.size()];
    for(int i=0;i<v.size();++i)
    {
        vshort[i] = false;
        visited[i][0] = false;
        visited[i][1] = false;
        dist[i] = -1;
    }
    queue<pair<int,int>> q;
    q.push({s,-1});
    q.push({0,-2});
    dist[s] = 0;
    vshort[s] = true;
    bfs(v,q,dist,visited,vshort);
    for(int i=0;i<v.size();++i)
        cout << dist[i] << " ";
    cout << endl;
}

int main()
{
    int t,n,m,s,a,b,c;
    cin >> t;
    while(t--)
    {
        cin >> n >> m >> s;
        vector<vector<pair<int,int>>> v(n);
        for(int i=0;i<m;++i)
        {
            cin >> a >> b >> c;
            v.at(a-1).push_back({b-1,c});
        }
        findShortestPath(v,s-1);
    }
    return 0;
}