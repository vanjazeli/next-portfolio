import Header from './components/containers/Header/Header';
import { content } from './components/containers/Header/Header.content';

export default function Home() {
	return (
		<div className="bg-slate-900">
			<div className="container px-6 mx-auto lg:px-40">
				<div className="lg:w-full lg:flex lg:gap-5 oultine-1 min-h-dvh">
					<div className="lg:w-1/2">
						<Header content={content} />
					</div>
					{/* <div className="lg:w-1/2">test</div> */}
				</div>
			</div>
		</div>
	);
}
