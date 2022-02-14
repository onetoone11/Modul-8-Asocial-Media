@extends('app')

@section('content')

    @if(session()->has('error_message'))
        <div class="container w-80">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                {{ session()->get('error_message') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    @endif
    <script>
        let post = {!! json_encode($data) !!};
        $('.alert').alert();
    </script>
    <div id="edit"></div>
@endsection