@extends('app')

    <script>
        let posts = {!! json_encode($posts) !!};
    </script>

@section('content')
    {{-- @csrf --}}
    <div id="create"></div>
@endsection


