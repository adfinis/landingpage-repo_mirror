import { createResource, For, Show } from 'solid-js';
import { Repo } from './components';
import yaml from 'js-yaml';

const fetchRepos = async () => {
    const resp = await fetch('/repos.yaml');
    return yaml.load(await resp.text(), {
        filename: 'repos.yaml',
    }).repos;
};

function RepoContainer(props) {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 first-of-type:mb-5">
            {props.children}
        </div>
    );
}

function App() {
    const [repos] = createResource(fetchRepos);
    return (
        <>
            <h1 class="text-adfinis-blue my-5">Welcome to pkg.adfinis.com</h1>
            <Show fallback={<p>...loading</p>} when={repos()}>
                <h2 class="text-black mb-2">Official Mirrors</h2>
                <RepoContainer>
                    <For each={repos().filter((r) => r.official)}>
                        {(repo) => <Repo {...repo} />}
                    </For>
                </RepoContainer>
                <h2 class="text-black mb-2">Unofficial Mirrors</h2>
                <RepoContainer>
                    <For each={repos().filter((r) => !r.official)}>
                        {(repo) => <Repo {...repo} />}
                    </For>
                </RepoContainer>
            </Show>
            <span class="sticky top-[100%] text-gray-700 text-center">
                The hardware and bandwidth for this mirror is donated by{' '}
                <img class="h-[1em] inline" src="/adfinis.png" /> to the
                open-source and free software community.
            </span>
        </>
    );
}

export default App;
