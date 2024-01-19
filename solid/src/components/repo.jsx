import {
    Show,
    createSignal,
    createEffect,
    createMemo,
    createResource,
} from 'solid-js';
import { SolidMarkdown } from 'solid-markdown';
import { useKeyDownEvent } from '@solid-primitives/keyboard';
import { Icon } from 'solid-heroicons';
import { informationCircle } from 'solid-heroicons/solid';

const fetchSizeData = async (localName) => {
    // stupid cors
    const resp = await fetch(
        `${
            import.meta.env.DEV ? 'http://localhost:4201' : ''
        }/${localName}.json`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Accept: '*/*',
            },
        },
    );
    return await resp.json();
};

export default function Repo(props) {
    const [modal, setModal] = createSignal(false);

    const keyDownEvent = useKeyDownEvent();

    const getLocalName = createMemo(
        () => props.localName ?? props.name.toLowerCase().replaceAll(' ', '-'),
    );

    const [sizeData] = createResource(getLocalName, fetchSizeData);

    createEffect(() => {
        if (!modal() || !keyDownEvent()) {
            return;
        }
        if (keyDownEvent().key === 'Escape') {
            setModal(false);
        }
    });

    return (
        <div class="w-full flex bg-gray-200 rounded transition-all">
            <a
                class="flex hover:bg-gray-300 p-2 pr-5 rounded-s flex-grow-[6] flex-shrink transition-all"
                href={`${
                    import.meta.env.DEV ? 'https://pkg.adfinis.com' : ''
                }/${getLocalName()}`}
            >
                <div
                    class="bg-contain bg-no-repeat bg-center min-w-10 w-full max-w-14 m-4"
                    style={{
                        'background-image': `url(/icons/${getLocalName()}.${
                            props.imageExtension ?? 'png'
                        })`,
                    }}
                />
                <div>
                    <h3 class="text-black">{props.name}</h3>
                    <p class="text-gray-700 whitespace-pre-wrap">
                        Mirror for {props.name}
                    </p>
                    <p class="text-gray-700 whitespace-pre-wrap">
                        Size:{' '}
                        <Show when={sizeData()} fallback={<>loading...</>}>
                            {' '}
                            {sizeData().size}{' '}
                        </Show>
                    </p>
                    <p class="text-gray-700 whitespace-pre-wrap">
                        Last Sync:{' '}
                        <Show when={sizeData()} fallback={<>loading...</>}>
                            {' '}
                            {sizeData().time}{' '}
                        </Show>
                    </p>
                </div>
            </a>
            <Show when={props.additional || props.help}>
                <button
                    class="text-adfinis-blue hover:text-adfinis-darkblue hover:bg-gray-300 p-3 z-10 rounded-e transition-all"
                    onClick={() => {
                        window.scrollTo(0, 0);
                        setModal(true);
                    }}
                >
                    <Icon path={informationCircle} width={50} />
                </button>
            </Show>
            <Show when={modal()}>
                <div
                    class="fixed z-20 w-full h-full opacity-25 bg-gray-600 inset-0"
                    onClick={() => setModal(false)}
                />
                <div class="absolute z-30 bg-white w-[90%] md:w-[85%] lg:w-[80%] p-4 rounded top-[50%] left-0 right-0 -translate-y-[50%] mx-auto">
                    <h2 class="text-adfinis-blue">{props.name} help</h2>
                    <Show when={props.help}>
                        <SolidMarkdown children={props.help} />
                    </Show>
                    <Show when={props.additional}>
                        <h2 class="text-adfinis-blue mt-4">
                            Additional information
                        </h2>
                        <p>
                            You can find further information about our mirror on
                            the following site:
                        </p>
                        <ul class="list-disc list-inside">
                            <li>
                                <a role="link" href={props.additional}>
                                    {props.additional}
                                </a>
                            </li>
                        </ul>
                    </Show>
                </div>
            </Show>
        </div>
    );
}
