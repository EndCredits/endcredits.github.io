import{_ as t,p as o,q as l,s as n,G as s,t as e,J as i,n as c}from"./framework-94166e2f.js";const d={},p=n("p",null,"亲爱的摸鱼弟弟亲自制作了一份极为精美的 Git 教程，有感而发而作此文",-1),r={href:"https://www.bilibili.com/video/BV1BR4y1e7xN/",target:"_blank",rel:"noopener noreferrer"},u=i(`<h3 id="_1-概要" tabindex="-1"><a class="header-anchor" href="#_1-概要" aria-hidden="true">#</a> 1. 概要</h3><p>Git, 一个分布式版本控制系统, 由大名鼎鼎的 Linux 之父 Linus Torvalds 开发, 世界上最好用最牛逼的 VCS ( 没有之一 )</p><blockquote><p><strong>git</strong>（/ɡɪt/) <a href="#reference-anchor-1"><sup>1</sup></a> 在英文中的释义是 &quot;傻子&quot;</p></blockquote><p>在 Git 自身的 README 中, Linus 曾对 Git 的名字做出了调侃 <a href="#reference-anchor-2"><sup>2</sup></a> <a href="#reference-anchor-3"><sup>3</sup></a></p><blockquote><p>&quot;git&quot; can mean anything, depending on your mood.</p><ul><li>random three-letter combination that is pronounceable, and not actually used by any common UNIX command. The fact that it is a mispronounciation of &quot;get&quot; may or may not be relevant.</li><li>stupid. contemptible and despicable. simple. Take your pick from the dictionary of slang.</li><li>&quot;global information tracker&quot;: you&#39;re in a good mood, and it actually works for you. Angels sing, and a light suddenly fills the room.</li><li>&quot;goddamn idiotic truckload of sh*t&quot;: when it breaks</li></ul></blockquote><p>接下来是几点我的个人建议</p><ol><li>不要使用 Git GUI 以及任何类似功能的软件，而是使用 Git 命令行</li><li>不要使用 VSCode 的三路合并器，而是进行手动合并</li><li>提交 commit 时请尽量使用清晰易懂的话描述你的提交内容，类似于↓</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#错误示例:</span>
<span class="token function">git</span> commit <span class="token parameter variable">-s</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;Make Page +1&quot;</span>
<span class="token comment">#正确示例:</span>
<span class="token function">git</span> commit <span class="token parameter variable">-s</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;This page is finished. Switch to next page&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_2-直奔主题" tabindex="-1"><a class="header-anchor" href="#_2-直奔主题" aria-hidden="true">#</a> 2. 直奔主题</h3><h3 id="_2-1-开始之前-git-的四区与四态" tabindex="-1"><a class="header-anchor" href="#_2-1-开始之前-git-的四区与四态" aria-hidden="true">#</a> 2.1 开始之前 | Git 的四区与四态</h3><p>Git 有四个工作工作区域，分别是</p><ul><li>工作区 (Workspace)</li><li>暂存区 (Index/Stage)</li><li>仓库区 (Repository)</li><li>远端区 (Remote)</li></ul><p>这些工作区域通过不同的 Git 命令联系在一起，如图所示</p>`,14),m={href:"https://mermaid.live/edit#pako:eNqFkL2OAjEMhF8lcs0KiTLFVddcQQMFTRorMexqN3GUOAiEePfLEvEjgYQry_7GI88FLDsCDVlQ6HfAQ0LfHVcmqFob8iykuu6ntpHzIJzOSqs9ie2XduJAd_CxbfBNp1UsuW_EjtOYI9p27S84Oi23goeZQuc-nnlqtLI92ZGLfAVjmaYGvZq8vWDZ-0FgAZ6Sx8HVCC6zzID05MmArq3DNBow4Vo5LMLbc7CgJRVaQInumRjoPU65TsnNBuuW6S3a6z9BmnW1",target:"_blank",rel:"noopener noreferrer"},g=n("img",{src:"https://mermaid.ink/img/pako:eNqFkL2OAjEMhF8lcs0KiTLFVddcQQMFTRorMexqN3GUOAiEePfLEvEjgYQry_7GI88FLDsCDVlQ6HfAQ0LfHVcmqFob8iykuu6ntpHzIJzOSqs9ie2XduJAd_CxbfBNp1UsuW_EjtOYI9p27S84Oi23goeZQuc-nnlqtLI92ZGLfAVjmaYGvZq8vWDZ-0FgAZ6Sx8HVCC6zzID05MmArq3DNBow4Vo5LMLbc7CgJRVaQInumRjoPU65TsnNBuuW6S3a6z9BmnW1?type=png",alt:""},null,-1),v=i(`<p>这张图也揭示了一般的 Git 工作流</p><ol><li>在工作区 ( Workspace ) 中修改内容</li><li>使用 <code>git add</code> 将修改加入暂存区 ( Index/Stage )</li><li>使用 <code>git commit</code> 将暂存区 ( Index/Stage )中的修改提交到仓库 ( Repository ) 中</li><li>使用 <code>git fetch</code> 捕获远程仓库 ( Remote ) 的新提交</li><li>使用 <code>git merge</code> 将远程仓库的提交合并到自己的仓库中 ( 并解决可能的合并冲突 )</li><li>使用 <code>git push</code> 将你的修改提交到远程仓库 ( Remote ) 中</li></ol><p>上面的工作流中可能有相当一部分你不熟悉，没有关系，下面的文章都会给出详解，等到学完 Git 的基本操作，再回来看这个工作流就会非常简单了</p><p>而作为一个版本控制系统，最本分的工作就是追踪不同版本之间文件的变化，与一些 VCS 不同的是，Git 并不关心这个文件具体的变化是什么，它只关心这个文件有没有变化，Git 使用 SHA-1 散列算法来确认文件是否被改变，Git 会对它追踪的每一个文件都计算一个 SHA-1 散列值，如果文件计算出的散列值与先前存储的散列值不同，那也就意味着该文件被改变了，就为这个文件直接生成一个新的快照而不去保存它具体的更改，这种方法是以空间换时间，在如今存储设备愈发廉价的时代，牺牲一些空间来换取极佳的体验是完全值得的</p><p>Git 中的文件也有四个状态，分别是</p><ul><li>未被追踪的 ( Untracked ) : 文件刚刚被添加到该工作区，还未被 Git 收录入版本控制，在对该文件使用 <code>git add &lt;file&gt;</code> 命令后，文件状态转为 Staged</li><li>未被修改的 ( Unmodified ) : 文件已被 Git 版本控制追踪，且文件相较于当前版本 ( HEAD ) 未被改变，修改 Unmodified 的文件后，该文件状态转为 Untracked</li><li>已被修改的 ( Modified ) : 文件已被 Git 版本控制追踪，且文件相较于当前版本 ( HEAD ) 已被更改，但新的变更并未被 Git 追踪，使用 <code>git add &lt;file&gt;</code> 后，处于该状态的文件转为 Staged ，使用 <code>git checkout HEAD &lt;file&gt;</code> 后，该文件状态转为 Unmodified 并被还原至当前版本 ( HEAD ) 中的状态</li><li>已被暂存的 ( Staged ) : 文件已被 Git 版本控制追踪，且文件相较于当前版本 ( HEAD ) 已被更改，且新的变更已被 Git 追踪，但变更尚未同步到本地仓库 ( Repository ) 中，在使用 <code>git commit</code> 后，所有处于 Staged 状态的文件转为 Unmodified 且进入一个新版本，使用 <code>git checkout HEAD &lt;file&gt;</code> 后，该文件状态转为 Modified 且内容被还原至当前版本 ( HEAD )</li></ul><p>看上去繁杂的 Git 指令操作，归根结底其实也就是在四区中将文件在四态之间转换来转换去，理解了这一点后，后面的学习就会变得非常简单，不只是要理解每个 Git 命令的作用，更要看到它背后的含义，下面我们就来进入正式的指令学习</p><hr><h4 id="_2-2-hello-world-git-init" tabindex="-1"><a class="header-anchor" href="#_2-2-hello-world-git-init" aria-hidden="true">#</a> 2.2 Hello World | <code>git init</code></h4><p><code>git init</code> 指令用于在本地初始化一个仓库，来运行一下试试看吧~</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> init   
hint: Using <span class="token string">&#39;master&#39;</span> as the name <span class="token keyword">for</span> the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use <span class="token keyword">in</span> all
hint: of your new repositories, <span class="token function">which</span> will suppress this warning, call:
hint:
hint:   <span class="token function">git</span> config <span class="token parameter variable">--global</span> init.defaultBranch <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
hint:
hint: Names commonly chosen instead of <span class="token string">&#39;master&#39;</span> are <span class="token string">&#39;main&#39;</span>, <span class="token string">&#39;trunk&#39;</span> and
hint: <span class="token string">&#39;development&#39;</span><span class="token builtin class-name">.</span> The just-created branch can be renamed via this command:
hint:
hint:   <span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
Initialized empty Git repository <span class="token keyword">in</span> /home/credits/git-tutorial/.git/
<span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就成功的在本地创建了一个 Git 仓库，默认分支为 master</p><p>可以注意到，<code>git init</code> 指令是允许传入参数的，我们可以在创建仓库时就指定主分支的名字，有两种方法，首先是在使用这条命令时直接传入，格式为</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另一种方式则是借助 <code>git config</code> 命令 ( 之后会细致的解释这个命令 ) 设定创建分支时默认使用的名字</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> init.defaultBranch <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="_2-3-来-让-git-康康-git-add" tabindex="-1"><a class="header-anchor" href="#_2-3-来-让-git-康康-git-add" aria-hidden="true">#</a> 2.3 来，让 Git 康康 | <code>git add</code></h3><p><code>git add</code> 是一个用来将当前未被 Git 追踪的文件添加到 Git 的暂存区，下面就来试试</p><p>首先创建一个新的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">touch</span> example1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后使用 <code>git add</code> 来让 git 追踪它，进入暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> <span class="token function">add</span> example1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在我们成功追踪了这个文件，来用 <code>git status</code> 看一下当前工作区和暂存区的状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> status
On branch main

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git rm --cached &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   example1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是非常简单呢，那么如果我们有多个文件，想要一起添加到 git 中，怎么办呢</p><p>当然是有多少来多少啦 ( 也可以使用正则表达式哦 )</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">touch</span> example2 example3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来看看现在的状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> status
On branch main

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git rm --cached &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   example1

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        example2
        example3

<span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现了两个未被追踪的文件，现在我们来追踪它们</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> <span class="token function">add</span> example2 example3
<span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> status
On branch main

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git rm --cached &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   example1
        new file:   example2
        new file:   example3

<span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功追踪</p><p>那如果我们想要一股脑把现有目录中的所有文件都添加到 git 中呢，当然是直接在 add 后面加上啦，现在我们就可以来看一下它最常见也是最常用的命令模板</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>files/directories<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，关于 <code>git add</code> 命令，掌握这些就足够用了</p><hr><h3 id="_2-4-那就给你康康-git-commit" tabindex="-1"><a class="header-anchor" href="#_2-4-那就给你康康-git-commit" aria-hidden="true">#</a> 2.4 那就给你康康 | <code>git commit</code></h3><p><code>git commit</code> 命令用于将暂存区的文件提交到本地仓库中，在上一节的内容中，我们已经向暂存区中加入了几个文件，现在就来做出我们的第一次提交吧</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> commit
Author identity unknown

*** Please tell me <span class="token function">who</span> you are.

Run

  <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;you@example.com&quot;</span>
  <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>

to <span class="token builtin class-name">set</span> your account&#39;s default identity.
Omit <span class="token parameter variable">--global</span> to <span class="token builtin class-name">set</span> the identity only <span class="token keyword">in</span> this repository.

fatal: empty ident name <span class="token punctuation">(</span>for <span class="token operator">&lt;</span>credits@CreditsLaptop.<span class="token operator">&gt;</span><span class="token punctuation">)</span> not allowed
<span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>喔，原来 git 还不知道我们叫什么名字呢，那不妨让我们先给 git 做个自我介绍，就要用到 <code>git config</code> 这个命令，在下文中，它还会再被详细描述，我们仅仅在这里使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;EndCredits&#39;</span>
<span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;alicization.han@gmail.com&#39;</span>
<span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> core.editor <span class="token string">&#39;vim&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令中，我们告诉了 Git ，我们的用户名是 <code>EndCredits</code>，邮箱是 <code>alicization.han@gmail.com</code>，编辑提交信息时使用的编辑器是 <code>vim</code>，当然这里不一定非得用 vim ，只是个人习惯了，也可以用 neovim 或者 nano 之类的，用着顺手就可以</p><p>现在终于可以做出第一次提交啦</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就会跳出编辑器的界面</p><p><img src="https://img1.imgtp.com/2023/02/05/AONSjpCJ.png" alt="commit-message-1.png"></p><p>现在我们来编辑这个文件，文件的第一行是你的提交 (commit) 的 title ，简述你这条 commit 的作用/意图，这是必须的，然后隔一行就可以写这条 commit 的详情，包括为什么要做出这条提交，有什么注意事项，测试结果等等，这个可以不写，至于为什么要隔一行才能开始写详情，这样可以避免一些 Git 系统把你的第二行也一起识别成 title ，十分影响可读性，那么下面我们就来填充这个 commit 的信息</p><p><img src="https://img1.imgtp.com/2023/02/05/AcKW8cIg.png" alt="edited-commit-message-1.png"></p><p>保存并退出，就可以看到我们的提交已经完成了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$ <span class="token function">git</span> commit
<span class="token punctuation">[</span>main <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> d231161<span class="token punctuation">]</span> Initial commit <span class="token keyword">for</span> the <span class="token function">git</span> tutorial
 <span class="token number">3</span> files changed, <span class="token number">0</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">0</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> example1
 create mode <span class="token number">100644</span> example2
 create mode <span class="token number">100644</span> example3
<span class="token punctuation">[</span>credits@CreditsLaptop git-tutorial<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 <code>git add</code> 一样，<code>git commit</code> 也是接收参数的，我们最常用到的参数有以下这么几个</p><p><code>-a</code> : 自动将所有处于已被修改的 ( Modified )状态的文件或被删除的文件添加至暂存区，并随当前暂存区中的内容一同提交</p><p><code>-s</code> : 在提交中自动加入 <code>Signed-off-by: </code> 的字样，如下图所示</p><p><img src="https://img1.imgtp.com/2023/02/05/TxEeKErE.png" alt="commit-signed-off-by.png"></p><p><code>--amend</code>: 后悔药，如果不小心打错了什么东西但是又手贱做了提交，那么加上这个参数我们就可以修改刚刚 commit 的内容，注意，这个参数只能修改 HEAD 的 commit message ，如果想要修改更早的 commits ，我们需要配合 <code>git rebase</code> 一起使用，之后会说到这里</p><p><code>--author</code>: 可以指定这条 commit 以谁的身份来做，格式是</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&#39;user.name &lt;user.email&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如以我的身份，那就是</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&#39;EndCredits &lt;alicization.han@gmail.com&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通常情况下我们不需要这个，git 会自动帮我们打上我们自己的信息，可是当 commit 的变更不是我们自己写的或者是应用 patch 的时候，我们就需要它来保留作者的名字和邮箱</p><p>掌握了上述内容，<code>git commit</code> 就基本够用了</p><hr><h3 id="_2-5-不给你康-git-rm" tabindex="-1"><a class="header-anchor" href="#_2-5-不给你康-git-rm" aria-hidden="true">#</a> 2.5: 不给你康 | <code>git rm</code></h3><p>未完待续...</p><h3 id="extra-引用文献" tabindex="-1"><a class="header-anchor" href="#extra-引用文献" aria-hidden="true">#</a> Extra: 引用文献</h3><div id="reference-anchor-1"></div>`,67),b={href:"https://www.collinsdictionary.com/zh/dictionary/english/git",target:"_blank",rel:"noopener noreferrer"},h=n("div",{id:"reference-anchor-2"},null,-1),k={start:"2"},f={href:"https://zh.wikipedia.org/w/index.php?title=Git&oldid=75797509",target:"_blank",rel:"noopener noreferrer"},x=n("div",{id:"reference-anchor-3"},null,-1),_={start:"3"},y={href:"https://github.com/git/git/blob/e83c5163316f89bfbde7d9ab23ca2e25604af290/README",target:"_blank",rel:"noopener noreferrer"};function q(G,L){const a=c("ExternalLinkIcon");return o(),l("div",null,[p,n("p",null,[s("诱导 -> "),n("a",r,[s("摸鱼的Git教程——10分钟快速上手"),e(a)])]),u,n("p",null,[n("a",m,[g,e(a)])]),v,n("ol",null,[n("li",null,[n("a",b,[s("Git 释义. (2023, February 2). Retrieved from 柯林斯英语词典"),e(a)])])]),h,n("ol",k,[n("li",null,[n("a",f,[s("Git. (2023, February 2). Retrieved from 维基百科, 自由的百科全书"),e(a)])])]),x,n("ol",_,[n("li",null,[n("a",y,[s("git/README(2023, February 2 at e83c51633). Retrieved from git/git on Github"),e(a)])])])])}const w=t(d,[["render",q],["__file","git-tutorial.html.vue"]]);export{w as default};
